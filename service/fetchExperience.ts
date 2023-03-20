import { Experience } from '../typings'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'

const query = groq`
*[_type=="experience"]{
 ...,
 technologies[]->
}`

export const fetchExperience = async () => {
  let experience: Experience[] = []
  try {
    const experience: Experience[] = await getClient(false).fetch(query)
    return experience
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return experience
}
