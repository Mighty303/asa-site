import { FooterContent } from '@/components/ui/layout/Footer'
import { TaxProgramCTAContent } from '@/components/ui/layout/TaxProgramCTA'
import { TaxProgramContent } from '@/components/ui/layout/TaxProgram'
import { Event } from '@/components/ui/layout/EventsGrid'

// Footer content - used in layout
export const footerContent: FooterContent = {
  logo: '/assets/asa-logo.svg',
  backgroundImage: '/assets/hero-bg.svg',
  socialLinks: [
    { name: 'Instagram', url: 'https://www.instagram.com/sfuasa/', icon: '/assets/footer/instagram-logo.jpg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/sfu-accounting-student-association/', icon: '/assets/footer/linkedin-logo.jpg' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@sfuasa', icon: '/assets/footer/tiktok-logo.jpg' },
  ],
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/our-team' },
    { label: 'Tax Program', href: '/tax-program' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  newsletter: {
    heading: 'Join the ASA Newsletter!',
    description: 'Sign up with your email address to receive news and updates about ASA!',
    placeholder: 'Email Address',
    buttonText: 'Sign Up',
  },
}

// Tax Program CTA content - used on home page
export const taxProgramCTAContent: TaxProgramCTAContent = {
  heading: 'Join Our Free Tax Program!',
  description: 'Get your taxes filed accurately and reliably for free by trained student volunteers today! We are now accepting CLIENT applications for the 2026 Tax Program.',
  ctaText: 'Register for Tax Program',
  ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform',
  image: '/assets/home/tax-program.jpg',
  imageAlt: 'Tax volunteer onboarding session',
}

// Tax Program page content
export const taxProgramPageContent: TaxProgramContent = {
  introSection: {
    heading: 'What is the Tax Program?',
    description: 'The ASA Tax Program is a free tax filing service for eligible SFU community members. Our dedicated student volunteers are trained by the <strong>Canada Revenue Agency (CRA)</strong> to prepare income tax returns for those with low income and simple, non-complex tax situations.',
    image: '/assets/teams/tax-program/tax-hero.jpg',
    imageAlt: 'Tax Program Team',
    statNumber: '800+',
    statDescription: 'Returns filed last year, helping over 1,000 members of the SFU community',
  },
  registrationSection: {
    statusText: '2026 Client Applications Now Open!',
    deadlineText: 'February 20th, 2026 at 11:59 PM',
    questionsHeading: 'Are you:',
    questions: [
      'Having trouble filing your tax returns?',
      'Never filed a tax return before?',
      "Don't have time to file?",
    ],
    volunteerMessage: 'Our ASA tax volunteers are here for you!',
    ctaText: 'Register Now',
    ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform',
    sideDescription: 'Register to be a client and have your tax returns filed by dedicated volunteers trained by the Canada Revenue Agency (CRA) and SFU Accounting Student Association (ASA). We help preserve benefits and financial entitlements while providing peace of mind for meeting tax filing obligations.',
  },
  eligibilitySection: {
    heading: 'Eligibility Criteria',
    subtitle: 'You may qualify if your income fits within the following limits:',
    incomeThresholds: {
      image: '/assets/teams/tax-program/eligible.jpg',
      imageAlt: 'Tax volunteers helping clients',
      heading: 'Income Thresholds',
      items: [
        'Single Person: $40,000 or less',
        'Couple (no dependents): $55,000 or less',
        'Three-person family: $60,000 or less',
        'Four-person family: $65,000 or less',
        'Five-person family: $70,000 or less',
      ],
    },
    additionalInfo: {
      image: '/assets/teams/tax-program/eligible-2.jpg',
      imageAlt: 'Tax program session',
      heading: 'Additional Information',
      items: [
        'Each additional dependent: +$2,500 allowed income',
        'Interest income must be under $1,200',
      ],
      note: "<strong>Have a spouse/partner?</strong> Register them separately, but mention each other's names in the appropriate section.",
    },
  },
  exclusionsSection: {
    heading: 'What We Cannot Help With',
    subtitle: 'Volunteers do not complete returns with the following:',
    image: '/assets/teams/tax-program/volunteers.jpg',
    imageAlt: 'Volunteer working',
    items: [
      'Business or rental income/expenses',
      'Self-employed individuals or employment expenses',
      "Deceased persons' tax returns",
      'Capital gains or losses',
      'Major investments (RRSP, stocks, mutual funds, RESP)',
      'Investments outside Canada',
      'Foreign income',
      'Bankruptcy filings',
      'Non-residents during the tax year',
    ],
  },
  footerCTA: {
    heading: 'Ready to Get Started?',
    dateText: 'Taxes will be filed March 8 - April 30, 2026',
    ctaText: 'Register as Client',
    ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform',
    craText: 'For further information, visit the',
    craLink: 'https://www.canada.ca/en/revenue-agency.html',
    contactText: 'Questions? Contact us at',
    contactEmail: 'sfutax@gmail.com',
  },
}

// Events content - used on about page
export const eventsContent: Event[] = [
  {
    title: 'MIX & MINGLE',
    subtitle: 'Networking Event',
    description: 'Our signature networking event, Mix & Mingle, launches Spring Recruit by giving students and firm representatives the opportunity to build meaningful connections before the interview and offer phases in May and June.',
    image: '/assets/events/mix-mingle.jpg',
    date: 'September',
  },
  {
    title: 'MIDSUMMER MIXER',
    subtitle: 'Networking Event',
    description: 'With Fall Recruit approaching, our annual Midsummer Mixer helps guide students through the final major recruiting season of the year, offering chances to build new connections with professionals.',
    image: '/assets/events/midsummer.jpg',
    date: 'October',
  },
  {
    title: 'HARVEST HORIZONS',
    subtitle: 'Networking Event',
    description: 'A low-barrier and casual networking event, Harvest Horizons offers a relaxed evening for students and firms to connect and build relationships in a comfortable setting.',
    image: '/assets/events/harvest-horizons.jpg',
    date: 'October',
  },
  {
    title: 'MIDSIZE MOTION',
    subtitle: 'Networking Event',
    description: 'Midsize Motion brings together students and representatives from midsize and growth-oriented accounting firms to foster genuine conversations and meaningful connections.',
    image: '/assets/events/midsize-motion.jpg',
    date: 'November',
  },
  {
    title: 'MENTORSHIP PROGRAM',
    subtitle: 'Skills-Development Initiative',
    description: 'The ASA Mentorship Program (AMP) connects junior accounting students with experienced senior students and industry professionals from October to December.',
    image: '/assets/events/mentorship.jpg',
    date: 'January – April',
  },
  {
    title: 'ACHIEVE',
    subtitle: 'Case Competition',
    description: "ASA's ACHIEVE Case Competition invites both beginner and experienced case competitors to tackle a unique accounting-focused case, partnering with CPABC and Big Four firms.",
    image: '/assets/events/achieve.jpg',
    date: 'March',
  },
]

// Hero content for home page
export const homeHeroContent = {
  tagline: ['ACCOUNTING STUDENT ASSOCIATION (ASA)'],
  teamImage: '/assets/home/team.jpg',
}

// Hero content for about page
export const aboutHeroContent = {
  tagline: ['ABOUT US'],
  description: 'At the SFU Accounting Student Association (ASA), our mission is to empower students on their journey to a successful and fulfilling professional life. We are dedicated to providing invaluable resources, fostering personal growth, and creating valuable experiences within our tight-knit community.',
}

// Hero content for tax program page
export const taxProgramHeroContent = {
  tagline: ['TAX PROGRAM'],
}

// Sponsors content for home page
export const sponsorsContent = {
  stats: [
    {
      number: '30+',
      description: 'Partners who are prestigious professional institutions and accounting firms across industries.',
    },
    {
      number: '50+',
      description: 'Networking events, information sessions, and social events held for our members throughout the year.',
    },
    {
      number: '2000+',
      description: 'Active subscribers and student members who are both highly engaged and eager to discover more opportunities in the accounting field.',
    },
  ],
  execTeamImage: '/assets/teams/exec-team.jpg',
  heading: 'Our Sponsors',
  description: 'We are proud to partner with leading accounting firms and professional institutions.',
  sponsors: [
    { name: 'Deloitte', logo: '/assets/sponsors/deloitte.jpg', url: 'https://www2.deloitte.com/ca/en.html' },
    { name: 'EY', logo: '/assets/sponsors/ey.jpg', url: 'https://www.ey.com/en_ca' },
    { name: 'KPMG', logo: '/assets/sponsors/kpmg.jpg', url: 'https://kpmg.com/ca/en/home.html' },
    { name: 'PwC', logo: '/assets/sponsors/pwc.jpg', url: 'https://www.pwc.com/ca/en.html' },
    { name: 'Doane Grant Thornton', logo: '/assets/sponsors/doane-grant-thornton.jpg', url: 'https://www.doanegrantthornton.ca/' },
    { name: 'Crowe', logo: '/assets/sponsors/crowe.jpg', url: 'https://www.crowe.com/' },
    { name: 'Baker Tilly', logo: '/assets/sponsors/bakertilly.jpg', url: 'https://www.bakertilly.ca/' },
    { name: 'Manning Elliott', logo: '/assets/sponsors/manning-elliot.jpg', url: 'https://www.manningelliott.com/' },
    { name: 'Lohn Caulder', logo: '/assets/sponsors/lohn-caulder.jpg', url: 'https://lohncaulder.com/' },
    { name: 'Invictus', logo: '/assets/sponsors/invictus.jpg', url: 'https://invictusaccounting.ca/' },
    { name: 'Treewalk', logo: '/assets/sponsors/treewalk.jpg', url: 'https://www.treewalk.ca/' },
  ],
}

// About Club content for home page
export const aboutClubContent = {
  heading: 'WHO WE ARE',
  description: 'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship.',
}

// Pillars content for about page
export const pillarsContent = {
  heading: 'Our Three Pillars',
  pillars: [
    {
      title: 'ASPIRE',
      description: "Our external service – we work with our sponsors from various accounting designations and firms to plan and host information and networking sessions that foster students' knowledge of the accounting industry and enhance career decision-making.",
      bgColor: '#7FA5DF',
    },
    {
      title: 'SHARE',
      description: 'Our community service – ASA is a platform for students to interact and learn from one another in a casual and social environment. We engage students at a social level to introduce students to the accounting industry and break down the misconceptions of accounting as a monotonous career.',
      bgColor: '#466CCC',
    },
    {
      title: 'ACHIEVE',
      description: 'Our internal service – ASA recognizes that academic excellence alone will not guarantee a successful career. Other qualities, such as leadership, time management and interpersonal skills are also as important. Thus, our association encourages the improvement of these qualities by giving members opportunities to project manage and volunteer at ASA events.',
      bgColor: '#1D3B87',
    },
  ],
}

// Timeline content for about page
export const timelineContent = {
  heading: 'Our Events',
  events: [
    { month: 'MARCH', title: 'Mix & Mingle', side: 'left' as const },
    { month: 'AUGUST', title: 'Midsummer Mixer', side: 'right' as const },
    { month: 'OCTOBER', title: 'Harvest Horizons\nMentorship Program', side: 'left' as const },
    { month: 'JANUARY', title: 'ACHIEVE Case\nCompetition', side: 'right' as const },
    { month: 'FEBRUARY', title: 'Midsize Motion', side: 'left' as const },
    { month: 'YEAR-ROUND', title: 'Firm-specific Events\n(e.g. Office Tours,\nInfo Sessions)', side: 'right' as const },
  ],
  footnote: '*Dates are subject to change',
}

// Contact page content
export const contactHeroContent = {
  tagline: ['CONTACT US'],
}

export const contactPageContent = {
  heading: 'Contact Us',
  intro: [
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
    submissionNote: "*Submissions are directly sent to the ASA President's inbox",
  },
  toast: {
    successTitle: 'Message sent successfully!',
    successDescription: 'Thank you for contacting us. We will get back to you within 1-7 business days.',
    errorTitle: 'Failed to send message',
    errorDescription: 'Please try again or contact us directly at sfuasa.pres@gmail.com',
  },
  alternativeContact: {
    email: {
      heading: 'Prefer Email?',
      text: 'You may also contact us at',
      address: 'sfuasa.pres@gmail.com',
    },
    taxProgram: {
      heading: 'Questions About Our Tax Program?',
      text: 'Reach our Project Managers at',
      address: 'sfutax@gmail.com',
    },
    socialMedia: {
      heading: 'Social Media',
      text: 'Stay connected with us on',
      links: [
        { name: 'Instagram', url: 'https://www.instagram.com/sfuasa/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/sfu-accounting-student-association/' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@sfuasa' },
      ],
    },
  },
}

// Team page content - for fallback and static content
export const teamPageContent = {
  heroDefault: {
    tagline: ['Meet Our Team'],
    description: 'Learn more about the ASA team members',
  },
  sections: {
    fullTeam: {
      heading: 'ASA 2025/2026 TEAM',
    },
    executiveTeam: {
      heading: 'EXECUTIVE TEAM',
    },
    presidents: {
      heading: 'PRESIDENTS',
      quote: '"Since our founding in 2012, the SFU Accounting Student Association (ASA) has been dedicated to providing meaningful professional and personal development opportunities for students pursuing accounting. Guided by our core values—Aspire, Share, and Achieve—we strive to make a positive impact within our community. Each year, we engage the Beedie community through our pillar initiatives, including networking events, our mentorship program, the volunteer tax program, and the ACHIEVE Case Competition. Supported by a team of 36 committed members, we continue to expand and enhance opportunities for students year after year."',
    },
  },
  teams: {
    event: {
      title: 'Event Team',
      members: [
        { name: 'Guilherme', role: 'Events Co-Director', photo: '/assets/teams/event/guilherme.jpg' },
        { name: 'Mattias', role: 'Events Co-Director', photo: '/assets/teams/event/mattias.jpg' },
        { name: 'Jasveen', role: 'Event Coordinator', photo: '/assets/teams/event/jasveen.jpg' },
        { name: 'Jestin', role: 'Event Coordinator', photo: '/assets/teams/event/jestin.jpg' },
        { name: 'Liam', role: 'Event Coordinator', photo: '/assets/teams/event/liam.jpg' },
        { name: 'Stephanie', role: 'Event Coordinator', photo: '/assets/teams/event/stephanie.jpg' },
        { name: 'Cindy', role: 'Event Coordinator', photo: '/assets/teams/event/cindy.jpg' },
      ],
    },
  },
}
