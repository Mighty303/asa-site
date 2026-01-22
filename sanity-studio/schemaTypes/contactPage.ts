import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'submissionNote',
      title: 'Submission Note',
      type: 'string',
    }),
    defineField({
      name: 'emailHeading',
      title: 'Email Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'emailText',
      title: 'Email Section Text',
      type: 'string',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'taxProgramHeading',
      title: 'Tax Program Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'taxProgramText',
      title: 'Tax Program Section Text',
      type: 'string',
    }),
    defineField({
      name: 'taxProgramEmail',
      title: 'Tax Program Email',
      type: 'string',
    }),
    defineField({
      name: 'socialMediaHeading',
      title: 'Social Media Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'socialMediaText',
      title: 'Social Media Section Text',
      type: 'string',
    }),
  ],
})