import { PageInfo } from '../typings'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'

const query = groq`
*[_type=="pageInfo"][0]
`
export const fetchPageInfo = async () => {
  let pageInfo: PageInfo = {
    _type: 'pageInfo',
    name: 'No Name',
    email: 'example@gmail.com',
    address: 'no address',
    backgroundInformation: 'no background information',
    phoneNumber: '0700000000',
    profilePic: null,
    role: 'no role',
    image: null,
    _createdAt: 'no where',
    _updateAt: 'none',
    _id: 'none',
    _rev: 'none',
  }
  try {
    const pageInfo: PageInfo = await getClient(false).fetch(query)
    return pageInfo
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return pageInfo
}
