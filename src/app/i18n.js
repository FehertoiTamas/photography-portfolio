import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hu from './locales/hu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hu: { translation: hu },
    },
    lng: 'en', // Alapértelmezett nyelv
    fallbackLng: 'en', // Ha a nyelv nem található
    interpolation: { escapeValue: false }, // React HTML escape nélkül
  });

export default i18n;
