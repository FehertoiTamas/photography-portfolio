import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const GeoLocationDetector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectCountryAndSetLanguage = async () => {
      try {
        // Először ellenőrizzük a böngésző nyelvét
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "hu" || browserLang === "es") {
          i18n.changeLanguage(browserLang);
          return;
        }

        // Ha a böngésző nyelve nem támogatott, akkor IP alapján próbáljuk meg
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        // Ország alapján nyelv beállítása
        if (data.country_code === "HU") {
          i18n.changeLanguage("hu");
        } else if (
          [
            "ES", // Spanyolország
            "PE", // Peru
            "MX", // Mexikó
            "AR", // Argentína
            "CO", // Kolumbia
            "CL", // Chile
            "EC", // Ecuador
            "VE", // Venezuela
            "UY", // Uruguay
            "PY", // Paraguay
            "BO", // Bolívia
            "CR", // Costa Rica
            "DO", // Dominikai Köztársaság
            "PA", // Panama
            "GT", // Guatemala
            "SV", // El Salvador
            "HN", // Honduras
            "NI", // Nicaragua
            "CU", // Kuba
            "PR", // Puerto Rico
          ].includes(data.country_code)
        ) {
          i18n.changeLanguage("es");
        } else {
          i18n.changeLanguage("en"); // Alapértelmezett nyelv: angol
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        // Hiba esetén alapértelmezett nyelv: angol
        i18n.changeLanguage("en");
      }
    };

    detectCountryAndSetLanguage();
  }, [i18n]);

  return null; // Ez egy "dumb" komponens, nem renderel semmit
};

export default GeoLocationDetector;
