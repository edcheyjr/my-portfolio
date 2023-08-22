import { deskTool } from 'sanity/desk'
import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'
import deskStructure from './deskStructure'
import { Logo } from './plugins/my-logo/Logo'

export default defineConfig({
  name: 'my-portfolio',
  projectId: 'e2f024ld',
  dataset: 'production',
  plugins: [deskTool({ structure: deskStructure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (process.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  studio: {
    components: {
      // custom components under here
      logo: Logo,
    },
  },
  // might need to include this or not
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) => templateItem.templateId != 'settings'
        )
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(
          ({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action)
        )
      }
      return prev
    },
  },
})
