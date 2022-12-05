// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Experience } from '../../typings'

import { groq } from 'next-sanity'
import { getClient } from '../../lib/sanity.server'

const query = groq`
*[_type=="experience"]{
 ...,
 technologies[]->
}
`
type Data = {
  experience: Experience[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await getClient(false).fetch(query)
  res.setHeader(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV == 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL || "'http://localhost:3000/'"
      : 'http://localhost:3000/'
  )
  res.status(200).json({ experience })
}
