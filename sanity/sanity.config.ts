import { deskTool } from 'sanity/desk'
import { DocumentActionComponent, Tool, defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'
import deskStructure from './deskStructure' //Has errors name not defined by sanity setting card
import { Logo } from './plugins/my-logo/Logo'
import ExampleTool from './plugins/my-tools/ExampleTool'
export default defineConfig({
  name: 'my-portfolio',
  projectId: 'e2f024ld',
  dataset: 'production',
  tools: (prev: Tool<any>[]) => {
    const env = process.env.SANITY_ACTIVE_ENV || process.env.NODE_ENV
    console.log('env:', env)
    //TODO This hides vision tool in production which is a quering tool
    // 👇 Uses environment variables set by Vite in development mode

    if (env == 'development') {
      return [...prev, ExampleTool({ title: 'custom tool' })]
    }
    return [
      ...prev.filter((tool) => tool.name !== 'vision'),
      ExampleTool({ title: 'custom tool' }),
    ]
  },
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
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
      // Actions allowed in settings mode though settings is not available but this can be more complex for other use cases
      if (schemaType === 'settings') {
        return prev.filter(
          ({ action }: DocumentActionComponent) =>
            !['unpublish', 'delete', 'duplicate'].includes(action)
        )
      }
      return prev
    },
  },
})
