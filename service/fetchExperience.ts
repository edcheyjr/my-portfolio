import { Experience } from '../typings'

export const fetchExperience = async () => {
  let experience: Experience[] = []
  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV == 'production'
          ? process.env.NEXT_PUBLIC_BASE_URL
          : 'http://localhost:3000/'
      }/api/getExperience`
    )
    const data = await response.json()

    // console.log("skills", data)
    // type check
    experience = data.experience

    return experience
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return experience
}
