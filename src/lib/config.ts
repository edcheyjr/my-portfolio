// config

import { ClientConfig, StegaConfig } from 'next-sanity'

const stegaConfig: StegaConfig | boolean = {
  enabled: false, //TODO Optional. Default to: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
  studioUrl: '/studio', //TODO Or: 'https://edchey.sanity.studio'
}
// lib/config.js
export const config: ClientConfig = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || 'none',
  apiVersion: '2023-08-22', // Learn more: https://www.sanity.io/docs/api-versioning | https://stripe.com/blog/api-versioning ..previous api '2022-10-21'
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production', // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  perspective: 'published',
  stega: stegaConfig,
  /**
   * OPTIONAL config to enable authentication with custom token
   * You might need this if you host the preview on a different url than Sanity Studio
   * will consider this
   */
  // token: '<sanity access token>',
  // EventSource:  /* provide your own event source implementation. Required in browsers to support the above token parameter. */,
}
