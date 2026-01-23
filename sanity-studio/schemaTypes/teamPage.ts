import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamPage',
  title: 'Team Page',
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
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'fullTeamImage',
      title: 'Full Team Image',
      type: 'image',
      description: 'Main team photo (from assets/home/team.jpg)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'executiveTeamImage',
      title: 'Executive Team Image',
      type: 'image',
      description: 'Executive team photo (from assets/teams/exec-team.jpg)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'presidentsImage',
      title: 'Presidents Image',
      type: 'image',
      description: 'Photo of both presidents (from assets/teams/presidents.jpg)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'headingFullTeam',
      title: 'Full Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingExecutiveTeam',
      title: 'Executive Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingPresidents',
      title: 'Presidents Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingEventTeam',
      title: 'Event Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingExternalRelations',
      title: 'External Relations Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingInternalRelations',
      title: 'Internal Relations Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingDesignTeam',
      title: 'Design Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingMarketingTeam',
      title: 'Marketing Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingFinanceTeam',
      title: 'Finance Team Heading',
      type: 'string',
    }),
    defineField({
      name: 'blockquote',
      title: 'Blockquote',
      type: 'text',
      description: 'Quote below the Presidents section',
    }),
  ],
})