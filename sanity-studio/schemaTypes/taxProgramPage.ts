import { defineField, defineType } from 'sanity'

export const taxProgramPage = defineType({
  name: 'taxProgramPage',
  title: 'Tax Program Page',
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
      name: 'introHeading',
      title: 'Intro Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Section Description',
      type: 'text',
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'statNumber',
      title: 'Stat Number',
      type: 'string',
    }),
    defineField({
      name: 'statDescription',
      title: 'Stat Description',
      type: 'text',
    }),
    defineField({
      name: 'registrationStatusText',
      title: 'Registration Status Text',
      type: 'string',
    }),
    defineField({
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'string',
    }),
    defineField({
      name: 'questionsHeading',
      title: 'Questions Heading',
      type: 'string',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'volunteerMessage',
      title: 'Volunteer Message',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'sideDescription',
      title: 'Side Description',
      type: 'text',
    }),
    defineField({
      name: 'eligibilityHeading',
      title: 'Eligibility Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'eligibilitySubtitle',
      title: 'Eligibility Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'incomeThresholdsImage',
      title: 'Income Thresholds Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'incomeThresholdsHeading',
      title: 'Income Thresholds Heading',
      type: 'string',
    }),
    defineField({
      name: 'incomeThresholds',
      title: 'Income Thresholds',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'additionalInfoImage',
      title: 'Additional Info Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'additionalInfoHeading',
      title: 'Additional Info Heading',
      type: 'string',
    }),
    defineField({
      name: 'additionalInfoItems',
      title: 'Additional Info Items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'additionalInfoNote',
      title: 'Additional Info Note',
      type: 'text',
    }),
    defineField({
      name: 'exclusionsHeading',
      title: 'Exclusions Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'exclusionsSubtitle',
      title: 'Exclusions Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'exclusionsImage',
      title: 'Exclusions Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'exclusionItems',
      title: 'Exclusion Items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'footerCTAHeading',
      title: 'Footer CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'footerCTADateText',
      title: 'Footer CTA Date Text',
      type: 'string',
    }),
    defineField({
      name: 'footerCTAText',
      title: 'Footer CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'footerCTALink',
      title: 'Footer CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'craText',
      title: 'CRA Text',
      type: 'string',
    }),
    defineField({
      name: 'craLink',
      title: 'CRA Link',
      type: 'url',
    }),
    defineField({
      name: 'contactText',
      title: 'Contact Text',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
  ],
})