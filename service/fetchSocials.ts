import { Social } from '../typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../lib/sanity.server'

const query = groq`
*[_type=="social"]
`
export const fetchSocials = async () => {
  let socials: Social[] = []
  try {
    // const response = await fetch(
    //   `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    // )
    // const data = await response.json()


    const socials: Social[] = await sanityClient.fetch(query)
    console.log('social', socials)

    return socials
  } catch (error) {
    console.log(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return socials
}
