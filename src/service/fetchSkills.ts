import { Skill } from '@types.d'
import { groq } from 'next-sanity'
import { sanityFetch } from '@lib/sanity'

const query = groq`
*[_type=="skill"]
`

export const fetchSkills = async () => {
  let skills: Skill[] = []
  try {
    const skills: Skill[] = await sanityFetch({ query, tags: ['skills'] })
    return skills
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return skills
}
