"use client"; // Ez jelzi, hogy kliens oldali komponensről van szó

import { useEffect } from "react";
import i18n from "../app/i18n"; // Az i18n konfiguráció

// Nyelv inicializálás komponenst
export default function I18nInitializer() {
  useEffect(() => {
    // Az i18n inicializálása
    i18n.init();
  }, []);

  return null; // Nem jelenítünk meg semmit
}
