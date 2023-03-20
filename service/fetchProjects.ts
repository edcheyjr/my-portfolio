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
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    // )
    // const data = await response.json()
    // // type check
    // projects = data.project
    
    const projects: Project[] = await sanityClient.fetch(query)
    console.log('projects', projects)
    return projects
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return projects
}
