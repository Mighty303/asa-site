import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ASA CMS',

  projectId: '97kwgu13',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Page')
              .child(S.documentTypeList('page')),
            S.listItem()
              .title('About Page')
              .child(S.documentTypeList('aboutPage')),
            S.listItem()
              .title('Tax Program Page')
              .child(S.documentTypeList('taxProgramPage')),
            S.listItem()
              .title('Contact Page')
              .child(S.documentTypeList('contactPage')),
            S.listItem()
              .title('Event')
              .child(S.documentTypeList('event')),
            S.listItem()
              .title('Statistic')
              .child(S.documentTypeList('stat')),
            S.listItem()
              .title('Sponsor')
              .child(S.documentTypeList('sponsor')),
            S.listItem()
              .title('Social Media')
              .child(S.documentTypeList('socialMedia')),
            S.listItem()
              .title('Site Settings')
              .child(S.documentTypeList('siteSettings')),
            S.listItem()
              .title('Team Member')
              .child(S.documentTypeList('teamMember')),
            S.listItem()
              .title('Team Page')
              .child(S.documentTypeList('teamPage')),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})