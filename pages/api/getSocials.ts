// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Social } from '../../typings'

import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity.server'

const query = groq`
*[_type=="social"]
`
type Data = {
  social: Social[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const social: Social[] = await sanityClient.fetch(query)
  res.setHeader(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV == 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL || "'http://localhost:3000/'"
      : 'http://localhost:3000/'
  )
  res.status(200).json({ social })
}
