import { Experience } from '@types.d'
import { groq } from 'next-sanity'
import { sanityFetch } from '@lib/sanity'

const query = groq`
*[_type=="experience"]{
 ...,
 technologies[]->
}`

export const fetchExperience = async () => {
  let experience: Experience[] = []
  try {
    const experience: Experience[] = await sanityFetch({
      query: query,
      tags: ['experience'],
    })
    return experience
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return experience
}
