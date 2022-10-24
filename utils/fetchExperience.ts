import { Experience } from '../typings'

export const fetchExperience = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  )
  const data = await response.json()

  // console.log("skills", data)
  // type check
  const experience: Experience[] = data.experience

  return experience
}
