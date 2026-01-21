import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
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
      replyTo: data.email,
      subject: `[ASA Contact Form] ${data.subject || 'New Message'} - from ${data.firstName} ${data.lastName}`,
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
