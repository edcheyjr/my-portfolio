import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'
import { Image } from '../typings'
import { QueryParams } from 'next-sanity'
import { createClient, groq } from 'next-sanity'
import { sanityClient } from './sanity.server'
const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

const token = process.env.SANITY_API_TOKEN
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: Image) =>
  createImageUrlBuilder(config).image(source)

/**
 * This are no longer used
 * Set up the live preview subscription hook realtime updates
 * Helper function for using the current logged in user account
 *
 */
// export const usePreviewSubscription = createPreviewSubscriptionHook(config)
// export const useCurrentUser = createCurrentUserHook(config)

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
    throw new Error('The `SANITY_API_TOKEN` environment variable is required.')
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
