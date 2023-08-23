import createImageUrlBuilder from '@sanity/image-url'
import { Image } from '@types.d'
import { config } from './config'
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: Image) =>
  createImageUrlBuilder(config).image(source)
