import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  )
  const data = await response.json()

  // console.log("skills", data)
  // type check
  const pageInfo: PageInfo = data.pageInfo

  return pageInfo
}
