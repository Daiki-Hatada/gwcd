/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config')

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
  i18n,
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  output: 'standalone',
  swcMinify: true,
}

module.exports = nextConfig
