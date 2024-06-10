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
  output: 'export',
    assetPrefix: './',
  distDir: 'out',
   images: {
    // unoptimized: true,
  },
}
 
export default nextConfig