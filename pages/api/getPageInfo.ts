// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { PageInfo } from '../../typings'

import { groq } from 'next-sanity'
import { getClient } from '../../lib/sanity.server'

const query = groq`
*[_type=="pageInfo"][0]
`
type Data = {
  pageInfo: PageInfo
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await getClient(false).fetch(query)
  res.status(200).json({ pageInfo })
}
