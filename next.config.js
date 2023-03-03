/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

// const dotenv = require('dotenv');

const { transform } = require('@formatjs/ts-transformer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYSE === 'true',
});

const nextConfig = {
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  reactStrictMode: false,
  images: {
    domains: ['ucarecdn.com'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = withBundleAnalyzer(nextConfig);
