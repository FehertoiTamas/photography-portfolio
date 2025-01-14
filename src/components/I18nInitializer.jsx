"use client";
import { useEffect } from "react";
import i18n from "../app/i18n"; // Az i18n konfiguráció

// Nyelv inicializálás komponens
export default function I18nInitializer() {
  useEffect(() => {
    // Az i18n inicializálása
    i18n.init();
  }, []);

  return null; // Nem jelenítünk meg semmit
}
