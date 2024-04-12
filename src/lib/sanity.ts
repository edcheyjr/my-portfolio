import 'server-only'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'
import { Image } from '../../typings'
import { QueryParams } from 'next-sanity'
import { sanityClient } from './sanity.server'
const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

const token = process.env.SANITY_API_READ_TOKEN!

/**
 * New fetch function  for sanity ui
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
  usePreview = false,
}: {
  query: string
  params?: QueryParams
  tags: string[]
  usePreview?: boolean
}): Promise<QueryResponse> {
  const isDraftMode = usePreview
  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_READ_API_TOKEN` environment variable is required.'
    )
  }

  return sanityClient.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  })
}
