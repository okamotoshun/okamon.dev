import { createClient } from 'microcms-js-sdk'

const apiKey = process.env.API_KEY
const serviceDomain = process.env.SERVICE_DOMAIN

if (!apiKey) {
  throw new Error('API_KEY is not set in .env.local')
}

if (!serviceDomain) {
  throw new Error('SERVICE_DOMAIN is not set in .env.local')
}

export const client = createClient({
  serviceDomain,
  apiKey,
})
