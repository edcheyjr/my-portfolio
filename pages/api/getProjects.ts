// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Project } from '../../typings'

import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity.server'

const query = groq`
*[_type=="project"]{
 ...,
 technologies[]->
}
`
type Data = {
  project: Project[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const project: Project[] = await sanityClient.fetch(query)

  res.status(200).json({ project })
}
