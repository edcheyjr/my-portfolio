// lib/sanity.server.js
import { createClient } from 'next-sanity'
import { config } from './config'

// console.log('config', config)
/**
 *
 *  Set up the client for fetching data in the getProps page functions
 * */
export const sanityClient = createClient(config)

/**
 * Set up a preview client with serverless authentication for drafts
 * @deprecated
 * */
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

/**
 * Helper function for easily switching between normal client and preview client
 * @deprecated
 **/
export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : sanityClient
