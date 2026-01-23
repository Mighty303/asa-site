import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Presidents', value: 'presidents' },
          { title: 'Executive Team', value: 'executive' },
          { title: 'Full Team', value: 'full-team' },
          { title: 'Event Team', value: 'eventTeam' },
          { title: 'External Relations Team', value: 'externalRelations' },
          { title: 'Internal Relations Team', value: 'internalRelations' },
          { title: 'Design Team', value: 'designTeam' },
          { title: 'Marketing Team', value: 'marketingTeam' },
          { title: 'Finance Team', value: 'financeTeam' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.required()
    })
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ]
})