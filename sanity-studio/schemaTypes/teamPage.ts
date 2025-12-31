import { defineField, defineType } from 'sanity'

export const teamPage = defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'fullTeamImage',
      title: 'Full Team Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'executiveTeamImage',
      title: 'Executive Team Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})