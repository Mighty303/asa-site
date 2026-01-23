import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
      initialValue: {
        current: 'home',
      },
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heroTeamImage',
      title: 'Hero Team Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutClubHeading',
      title: 'About Club Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'aboutClubDescription',
      title: 'About Club Section Description',
      type: 'text',
    }),
    defineField({
      name: 'taxProgramCTAHeading',
      title: 'Tax Program CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'taxProgramCTADescription',
      title: 'Tax Program CTA Description',
      type: 'text',
    }),
    defineField({
      name: 'taxProgramCTAText',
      title: 'Tax Program CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'taxProgramCTALink',
      title: 'Tax Program CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'taxProgramCTAImage',
      title: 'Tax Program CTA Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'taxProgramCTAImageAlt',
      title: 'Tax Program CTA Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'sponsorsHeading',
      title: 'Sponsors Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'sponsorsDescription',
      title: 'Sponsors Section Description',
      type: 'text',
    }),
  ],
})
