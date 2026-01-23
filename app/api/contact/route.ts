import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject?: string
  message?: string
}

// Basic server-side validation limits
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_SUBJECT_LENGTH = 150
const MAX_MESSAGE_LENGTH = 5000

function sanitizeHeader(value: string): string {
  // Strip CRLF to avoid basic header injection
  return value.replace(/[\r\n\t]/g, ' ').trim()
}

function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    let rawBody: unknown
    try {
      rawBody = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      )
    }

    const body = rawBody as Partial<ContactFormData>

    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
    const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const subject = typeof body.subject === 'string' ? body.subject.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    const errors: string[] = []

    // Validate required fields
    if (!firstName) errors.push('First name is required')
    if (!lastName) errors.push('Last name is required')
    if (!email) errors.push('Email is required')

    if (firstName.length > MAX_NAME_LENGTH) errors.push('First name is too long')
    if (lastName.length > MAX_NAME_LENGTH) errors.push('Last name is too long')

    // Validate email format
    if (!isValidEmail(email)) {
      errors.push('Invalid email format')
    }

    if (subject.length > MAX_SUBJECT_LENGTH) errors.push('Subject is too long')
    if (message.length > MAX_MESSAGE_LENGTH) errors.push('Message is too long')

    // Require at least some content (subject or message)
    if (!subject && !message) {
      errors.push('Please provide a subject or a message')
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    const data: ContactFormData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    }

    // Create transporter
    // For Gmail, you'll need to use an App Password (not your regular password)
    // Enable 2FA on your Google account, then generate an App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Where to receive contact form emails
      replyTo: sanitizeHeader(data.email),
      subject: `[ASA Contact Form] ${sanitizeHeader(data.subject || 'New Message')} - from ${sanitizeHeader(data.firstName)} ${sanitizeHeader(data.lastName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #28599E; border-bottom: 2px solid #28599E; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ''}
          </div>
          
          ${data.message ? `
            <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the SFU ASA website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.subject ? `Subject: ${data.subject}` : ''}

${data.message ? `Message:\n${data.message}` : ''}

---
This email was sent from the SFU ASA website contact form.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Optionally send a confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank you for contacting SFU ASA',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #28599E;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${data.firstName},</p>
          
          <p>Thank you for contacting the SFU Accounting Student Association. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ''}
            ${data.message ? `<p><strong>Message:</strong> ${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}</p>` : ''}
          </div>
          
          <p>Best regards,<br/>SFU Accounting Student Association</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
