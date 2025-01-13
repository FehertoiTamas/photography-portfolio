/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/photography-portfolio' : '',
  assetPrefix: isProd ? '/photography-portfolio/' : '',
};

export default nextConfig;