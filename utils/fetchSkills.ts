import { Skill } from '../typings'

export const fetchSkills = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  )
  const data = await response.json()

  // console.log('skills', data)
  // type check
  const skills: Skill[] = data.skill

  return skills
}
