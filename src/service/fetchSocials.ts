import { Social } from '@types.d'
import { groq } from 'next-sanity'
import { sanityFetch } from '@lib/sanity'

const query = groq`
*[_type=="social"]
`
export const fetchSocials = async () => {
  let socials: Social[] = []
  try {
    const socials: Social[] = await sanityFetch({
      query: query,
      tags: ['socials'],
    })
    // console.log('social', socials)
    return socials
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return socials
}
