"use client"

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Hero from '@/components/ui/layout/Hero'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { contactHeroContent, contactPageContent } from '@/lib/content'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject?: string
  message?: string
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      toast.success(contactPageContent.toast.successTitle, {
        description: contactPageContent.toast.successDescription
      })
      reset()
    } catch {
      toast.error(contactPageContent.toast.errorTitle, {
        description: contactPageContent.toast.errorDescription,
        style: {
          background: '#ef4444',
          color: 'white',
          border: 'none',
        },
      })
    }
  }

  return (
    <main className="min-h-screen">
      <Hero content={contactHeroContent} />

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-6">
          {contactPageContent.heading}
        </h2>
        {contactPageContent.intro.map((line, index) => (
          <p key={index} className="text-md">
            {line}
          </p>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Name Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                {contactPageContent.form.firstName.label}
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
                {contactPageContent.form.lastName.label}
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
              {contactPageContent.form.email.label}
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
              {contactPageContent.form.subject.label}
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
              {contactPageContent.form.message.label}
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
              {isSubmitting ? contactPageContent.form.submittingButton : contactPageContent.form.submitButton}
            </Button>
          </div>
        </form>

        {/* Additional Note */}
        <p className="text-sm text-gray-600 mt-8">
          {contactPageContent.form.submissionNote}
        </p>
      </section>

      {/* Alternative Contact Options */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-4xl space-y-12">
        {/* Prefer Email */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            {contactPageContent.alternativeContact.email.heading}
          </h3>
          <p className="text-md text-gray-800">
            {contactPageContent.alternativeContact.email.text}{' '}
            <a 
              href={`mailto:${contactPageContent.alternativeContact.email.address}`}
              className="text-[#5293BB] hover:underline font-semibold"
            >
              {contactPageContent.alternativeContact.email.address}
            </a>
          </p>
        </div>

        {/* Tax Program */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            {contactPageContent.alternativeContact.taxProgram.heading}
          </h3>
          <p className="text-md text-gray-800">
            {contactPageContent.alternativeContact.taxProgram.text}{' '}
            <a 
              href={`mailto:${contactPageContent.alternativeContact.taxProgram.address}`}
              className="text-[#5293BB] hover:underline font-semibold"
            >
              {contactPageContent.alternativeContact.taxProgram.address}
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            {contactPageContent.alternativeContact.socialMedia.heading}
          </h3>
          <p className="text-md text-gray-800">
            {contactPageContent.alternativeContact.socialMedia.text}
          </p>
        </div>
      </section>
    </main>
  )
}