// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Skill } from '../../typings'

import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity.server'

const query = groq`
*[_type=="skill"]
`
type Data = {
  skill: Skill[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skill: Skill[] = await sanityClient.fetch(query)
  res.status(200).json({ skill })
}
