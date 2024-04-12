import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'any image about the project you want to share',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'add a summory about this project',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      description: 'add the technologies used of this project',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    }),
    defineField({
      name: 'linkToBuild',
      description: 'add the link to build or deployment of this project',
      title: 'LinkToBuild',
      type: 'url',
    }),
    defineField({
      name: 'linkTobuild',
      title: 'LinkTobuild',
      description: 'add the link to build or deployment of this project',
      type: 'url',
      deprecated: {
        reason: 'moved to updated field LinkToBuild',
      },
      readOnly: true, //prevent further Edits sets to read only and depreciated
    }),
  ],
})
