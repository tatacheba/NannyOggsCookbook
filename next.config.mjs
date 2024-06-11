// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    assetPrefix: './',
    distDir: 'out',
    publicPath: './',

    images: {
        unoptimized: false
    },
    //  webpack(config, options) {         config.module.rules.push({
    // test: /\.css$/,             use: [                 options.rules.css,
    //         'postcss-loader', // Add postcss-loader to the loader chain
    //   ],         });         return config;     }
}

export default nextConfig;