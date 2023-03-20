import { Project } from '../typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../lib/sanity.server'

const query = groq`
*[_type=="project"]{
 ...,
 technologies[]->
}
`

export const fetchProjects = async () => {

  let projects: Project[] = []
  try {
    const projects: Project[] = await sanityClient.fetch(query)
    return projects
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return projects
}
