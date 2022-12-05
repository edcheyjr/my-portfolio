import { Social } from '../typings'

export const fetchSocials = async () => {
  let socials: Social[] = []
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    )
    const data = await response.json()

    // console.log('socials', data)
    // type check
    socials = data.social

    return socials
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return socials
}
