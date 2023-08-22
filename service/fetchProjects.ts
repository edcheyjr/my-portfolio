import { sanityFetch } from '../lib/sanity'
import { Project } from '../typings'
import { groq } from 'next-sanity'

const query = groq`
*[_type=="project"]{
 ...,
 technologies[]->
}
`

export const fetchProjects = async () => {
  let projects: Project[] = []
  try {
    const projects: Project[] = await sanityFetch({
      query: query,
      tags: ['technolgies'],
    })
    return projects
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return projects
}
