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
    // const response = await fetch(
    //   `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    // )
    // const data = await response.json()

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
