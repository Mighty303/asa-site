"use client"

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Loader2, Mail, Phone, MapPin } from 'lucide-react'
import Hero from '@/components/ui/layout/Hero'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { contactHeroContent, contactPageContent } from '@/lib/content'
import Image from 'next/image'

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

      {/* Main Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-4">
                  {contactPageContent.heading}
                </h2>
                <div className="space-y-2">
                  {contactPageContent.intro.map((line, index) => (
                    <p key={index} className="text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-lg">
                  <div className="p-3 bg-[#28599E] rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {contactPageContent.alternativeContact.email.heading}
                    </h3>
                    <a 
                      href={`mailto:${contactPageContent.alternativeContact.email.address}`}
                      className="text-[#28599E] hover:underline"
                    >
                      {contactPageContent.alternativeContact.email.address}
                    </a>
                  </div>
                </div>

                {/* Tax Program Card */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-lg">
                  <div className="p-3 bg-[#28599E] rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {contactPageContent.alternativeContact.taxProgram.heading}
                    </h3>
                    <a 
                      href={`mailto:${contactPageContent.alternativeContact.taxProgram.address}`}
                      className="text-[#28599E] hover:underline"
                    >
                      {contactPageContent.alternativeContact.taxProgram.address}
                    </a>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-lg">
                  <div className="p-3 bg-[#28599E] rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {contactPageContent.alternativeContact.socialMedia.heading}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {contactPageContent.alternativeContact.socialMedia.text}{' '}
                      {contactPageContent.alternativeContact.socialMedia.links.map((link, index) => (
                        <span key={link.name}>
                          <a 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28599E] hover:underline"
                          >
                            {link.name}
                          </a>
                          {index < contactPageContent.alternativeContact.socialMedia.links.length - 1 && (
                            index === contactPageContent.alternativeContact.socialMedia.links.length - 2 ? ', and ' : ', '
                          )}
                        </span>
                      ))}
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional: Add an image or illustration */}
              <div className="hidden lg:block relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/teams/exec-team.jpg"
                  alt="ASA Team"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-[#28599E]/20" />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 flex flex-col">
              <h3 className="text-2xl font-bold text-[#28599E] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex flex-col grow">
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {contactPageContent.form.firstName.label} <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="firstName"
                      type="text" 
                      placeholder="John"
                      {...register('firstName', { 
                        required: 'First name is required',
                        minLength: { value: 2, message: 'First name must be at least 2 characters' }
                      })}
                      className={`w-full h-12 px-3 py-2 text-sm border rounded-lg focus:border-[#28599E] focus:ring-[#28599E]/20 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {contactPageContent.form.lastName.label} <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      {...register('lastName', { 
                        required: 'Last name is required',
                        minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                      })}
                      className={`w-full h-12 px-3 py-2 text-sm border rounded-lg focus:border-[#28599E] focus:ring-[#28599E]/20 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Email and Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {contactPageContent.form.email.label} <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className={`w-full h-12 px-3 py-2 text-sm border rounded-lg focus:border-[#28599E] focus:ring-[#28599E]/20 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {contactPageContent.form.subject.label}
                    </label>
                    <Input 
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      {...register('subject')}
                      className="w-full h-12 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#28599E] focus:ring-[#28599E]/20"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col grow">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {contactPageContent.form.message.label}
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    {...register('message')}
                    className="w-full h-12 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#28599E] focus:ring-[#28599E]/20 resize-none grow min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#28599E] hover:bg-[#1d4578] text-white font-semibold py-5 text-sm rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {contactPageContent.form.submittingButton}
                    </>
                  ) : (
                    contactPageContent.form.submitButton
                  )}
                </Button>

                {/* Additional Note */}
                <p className="text-xs text-gray-500 text-center">
                  {contactPageContent.form.submissionNote}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
