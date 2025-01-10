/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'hu', 'es'], // Az elérhető nyelvek
    defaultLocale: 'en',   // Az alapértelmezett nyelv
    localeDetection: false, // Kikapcsoljuk az automatikus nyelvdetektálást
  },
};

export default nextConfig;
