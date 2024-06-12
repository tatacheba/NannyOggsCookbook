// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
  assetPrefix: './',
    distDir:'build',
   images: {
    domains: ['example.com'],
 
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'tatacheba.github.io/NannyOggsCookbook',
  //       port: '',
  //       pathname: '/out/**',
  //     },
  //   ],
     // },
   },
}

export default nextConfig;