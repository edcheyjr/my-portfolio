import { PageInfo } from '../typings'

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
    const response = await fetch(
      `${
        process.env.NODE_ENV == 'production'
          ? process.env.NEXT_PUBLIC_BASE_URL
          : 'http://localhost:3000/'
      }/api/getPageInfo`
    )
    const data = await response.json()
    pageInfo = data.pageInfo

    return pageInfo
  } catch (error) {
    console.error(
      '[Server did not respond ] check you connection first. error-',
      error
    )
  }
  return pageInfo
}
