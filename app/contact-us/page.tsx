"use client"

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Hero from '@/components/ui/layout/Hero'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject?: string
  message?: string
}

const heroContent = {
  tagline: ['CONTACT US'],
}

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Form submitted:', data)
      // TODO: Add actual form submission logic (e.g., send to API)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Message sent successfully!', {
        description: 'Thank you for contacting us. We will get back to you within 1-7 business days.',
      })
      reset()
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly at sfuasa.pres@gmail.com',
      })
    }
  }

  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-6">
          Contact Us
        </h2>
        <p className="text-md">
          Thank you for contacting the SFU Accounting Student Association.
        </p>
        <p className="text-md">
          Please submit your inquiry using the form below.
        </p>
        <p className="text-md">
          You can expect a response in 1-7 business days.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Name Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name *
              </label>
              <Input 
                id="firstName"
                type="text" 
                {...register('firstName', { 
                  required: 'First name is required',
                  minLength: { value: 2, message: 'First name must be at least 2 characters' }
                })}
                className={`w-full px-4 py-6 text-base border-2 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name *
              </label>
              <Input 
                id="lastName"
                type="text" 
                {...register('lastName', { 
                  required: 'Last name is required',
                  minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                })}
                className={`w-full px-4 py-6 text-base border-2 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <Input 
              id="email"
              type="email" 
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className={`w-full px-4 py-6 text-base border-2 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <Input 
              id="subject"
              type="text"
              {...register('subject')}
              className="w-full px-4 py-6 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Leave us a message...
            </label>
            <Textarea 
              id="message"
              rows={12}
              {...register('message')}
              className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30 resize-none min-h-32"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-4">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#5293BB] hover:bg-[#3d7496] text-white font-semibold px-12 py-6 text-lg rounded-md shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>

        {/* Additional Note */}
        <p className="text-sm text-gray-600 mt-8">
          *Submissions are directly sent to the ASA President&apos;s inbox
        </p>
      </section>

      {/* Alternative Contact Options */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-4xl space-y-12">
        {/* Prefer Email */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            Prefer Email?
          </h3>
          <p className="text-md text-gray-800">
            You may also contact us at{' '}
            <a 
              href="mailto:sfuasa.pres@gmail.com" 
              className="text-[#5293BB] hover:underline font-semibold"
            >
              sfuasa.pres@gmail.com
            </a>
          </p>
        </div>

        {/* Tax Program */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            Questions About Our Tax Program?
          </h3>
          <p className="text-md text-gray-800">
            Reach our Project Managers at{' '}
            <a 
              href="mailto:sfutax@gmail.com" 
              className="text-[#5293BB] hover:underline font-semibold"
            >
              sfutax@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            Social Media
          </h3>
          <p className="text-md text-gray-800">
            Stay connected with us on Instagram, LinkedIn, and TikTok.
          </p>
        </div>
      </section>
    </main>
  )
}