import { Buffer } from 'buffer';

// Function to encode slug
export const encodeSlug = (slug) => {
  return Buffer.from(slug).toString('base64');
};

// Function to decode slug
export const decodeSlug = (encodedSlug) => {
  return Buffer.from(encodedSlug, 'base64').toString('utf-8');
};
