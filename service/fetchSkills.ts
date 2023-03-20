import { Skill } from '../typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../lib/sanity.server'

const query = groq`
*[_type=="skill"]
`

export const fetchSkills = async () => {
  let skills: Skill[] = []
  try {
    // const response = await fetch(
    //   `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    // )
    // const data = await response.json()

    // skills = data.skill
    
    const skills: Skill[] = await sanityClient.fetch(query)

    return skills
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return skills
}
