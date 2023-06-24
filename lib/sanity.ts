import {
createClient,
ClientConfig 
} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'
import { Image } from '../typings'

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: Image) =>
  createImageUrlBuilder(config).image(source)

// Helper function for using the current logged in user account
export const useCurrentUser = createClient(config) 
