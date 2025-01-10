/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'hu', 'es'], // Nyelvek: angol és magyar
    defaultLocale: 'en',   // Alapértelmezett nyelv
    localeDetection: false, // Kikapcsoljuk az automatikus nyelvdetektálást
  },
};

export default nextConfig;
