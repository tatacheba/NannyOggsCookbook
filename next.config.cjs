// next.config.cjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  assetPrefix: "./",
  distDir: "out",
  pageExtensions: ["jsx", "js", "ts", "tsx"],
  serveStaticAssets: "public",
  imageResolution: "public",
};

module.exports = nextConfig;
