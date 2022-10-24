// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// imported object and document schemas
import pageInfo from './pageInfo'
import experience from './experience'
import social from './social'
import skill from './skill'
import project from './project'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // The following are document types that will
    //appear in studio
    pageInfo,
    experience,
    project,
    skill,
    social,
  ]),
})
