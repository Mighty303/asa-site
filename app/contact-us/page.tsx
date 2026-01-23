import Hero from '@/components/ui/layout/Hero'
import ContactForm from '@/components/ui/layout/ContactForm'
import { client } from '@/lib/sanity'

async function getContactData() {
  const query = `{
    "contactPage": *[_type == "contactPage" && slug.current == "contact-us"][0],
    "socialMedia": *[_type == "socialMedia"] | order(order asc) {
      name,
      url
    }
  }`
  
  return client.fetch(query)
}

export default async function ContactUs() {
  const data = await getContactData()
  
  // Transform contact page data
  const contactHeroContent = {
    tagline: data.contactPage?.heroTagline || ['CONTACT US'],
  }

  const contactPageContent = {
    heading: data.contactPage?.heading || 'Contact Us',
    intro: data.contactPage?.introText || [
      'Thank you for contacting the SFU Accounting Student Association.',
      'Please submit your inquiry using the form below.',
      'You can expect a response in 1-7 business days.',
    ],
    form: {
      firstName: { label: 'First Name', placeholder: '' },
      lastName: { label: 'Last Name', placeholder: '' },
      email: { label: 'Email', placeholder: '' },
      subject: { label: 'Subject', placeholder: '' },
      message: { label: 'Leave us a message...', placeholder: '' },
      submitButton: 'Submit',
      submittingButton: 'Submitting...',
      submissionNote: data.contactPage?.submissionNote || "*Submissions are directly sent to the ASA President's inbox",
    },
    toast: {
      successTitle: 'Message sent successfully!',
      successDescription: 'Thank you for contacting us. We will get back to you within 1-7 business days.',
      errorTitle: 'Failed to send message',
      errorDescription: 'Please try again or contact us directly at sfuasa.pres@gmail.com',
    },
    alternativeContact: {
      email: {
        heading: data.contactPage?.emailHeading || 'Prefer Email?',
        text: data.contactPage?.emailText || 'You may also contact us at',
        address: data.contactPage?.emailAddress || 'sfuasa.pres@gmail.com',
      },
      taxProgram: {
        heading: data.contactPage?.taxProgramHeading || 'Questions About Our Tax Program?',
        text: data.contactPage?.taxProgramText || 'Reach our Project Managers at',
        address: data.contactPage?.taxProgramEmail || 'sfutax@gmail.com',
      },
      socialMedia: {
        heading: data.contactPage?.socialMediaHeading || 'Social Media',
        text: data.contactPage?.socialMediaText || 'Stay connected with us on',
        links: data.socialMedia?.map((sm: { name?: string; url?: string }) => ({
          name: sm.name || '',
          url: sm.url || '',
        })) || [],
      },
    },
  }

  return (
    <main className="min-h-screen">
      <Hero content={contactHeroContent} />
      <ContactForm content={contactPageContent} />
    </main>
  )
}
