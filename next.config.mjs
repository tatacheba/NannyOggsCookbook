// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// }
 
// module.exports = nextConfig
// @ts-check
 
// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
    assetPrefix: './',
  distDir: 'out',
   images: {
    unoptimized: true,
  },
}
 
export default nextConfig

// const path = require('path');

// module.exports = {
//   images: {
//     domains: ['yourdomain.com'],
//   },
//   webpack(config) {
//     config.resolve.alias['@'] = path.resolve(__dirname);
//     return config;
//   },
// };
