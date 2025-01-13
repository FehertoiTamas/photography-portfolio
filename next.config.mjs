/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: isProd, // Ha production módban vagy, akkor kikapcsolja az optimalizálást
  },
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/photography-portfolio' : '',
  assetPrefix: isProd ? '/photography-portfolio/' : '',
};

export default nextConfig;