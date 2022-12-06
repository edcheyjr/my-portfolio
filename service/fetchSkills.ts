import { Skill } from '../typings'

export const fetchSkills = async () => {
  let skills: Skill[] = []
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    )
    const data = await response.json()

    // console.log('skills', data)
    // type check
    skills = data.skill

    return skills
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return skills
}
