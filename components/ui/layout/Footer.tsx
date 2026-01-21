"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FooterContent {
  logo: string
  backgroundImage: string
  socialLinks: SocialLink[]
  navLinks: NavLink[]
  newsletter: {
    heading: string
    description: string
    placeholder: string
    buttonText: string
  }
}

interface FooterProps {
  content: FooterContent
}

interface NewsletterFormData {
  email: string
}

export default function Footer({ content }: FooterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<NewsletterFormData>()

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // TODO: Add actual newsletter subscription API call
      console.log('Newsletter subscription:', data.email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Successfully subscribed!', {
        description: 'Thank you for joining the ASA newsletter.',
      })
      reset()
    } catch {
      toast.error('Subscription failed', {
        description: 'Please try again later.',
        style: {
          background: '#ef4444',
          color: 'white',
          border: 'none',
        },
      })
    }
  }

  return (
    <footer className="relative">
      <Image 
        className='absolute inset-0 w-full h-full object-cover -z-10' 
        src={content.backgroundImage}
        width={1920} 
        height={400} 
        alt="Footer background" 
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-4 text-white text-lg">
            <Link href="/" className="flex items-center gap-2 mb-2">
             <Image className='w-18 h-18' src={content.logo} width={32} height={32} alt="ASA Logo" />
            </Link>
            <div className="flex gap-4 mt-2">
              {content.socialLinks.map((social, index) => (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Image className='w-8 h-8' src={social.icon} width={32} height={32} alt={`${social.name} Logo`} />
                </Link>
              ))}
            </div>
            {content.navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:underline hover:underline-offset-6 hover:decoration-2">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-start text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
              {content.newsletter.heading}
            </h2>
            <p className="text-white text-left text-lg mb-6 max-w-md">
              {content.newsletter.description}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-3 w-full max-w-md">
              <Input 
                type="email" 
                placeholder={content.newsletter.placeholder}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
                className={`flex-1 min-w-0 bg-white/90 text-gray-900 placeholder:text-gray-500 border-2 rounded-full px-6 py-3 md:py-6 text-base ${errors.email ? 'border-red-500' : 'border-transparent'}`}
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="shrink-0 bg-[#28599E] hover:bg-[#1d4578] text-white font-semibold px-8 py-6 rounded-full text-base whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  content.newsletter.buttonText
                )}
              </Button>
            </form>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

        </div>
      </div>
    </footer>
  )
}