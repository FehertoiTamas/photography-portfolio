"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("hu")}>HU</button>
      <button onClick={() => changeLanguage("es")}>ESP</button>
    </div>
  );
}
