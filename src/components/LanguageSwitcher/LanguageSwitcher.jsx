"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // importáljuk a CSS fájlt

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false); // A lenyitható menü állapota

  const languages = ["en", "hu", "es"]; // A támogatott nyelvek listája

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsOpen(false); // Bezárjuk a menüt a nyelv kiválasztása után
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Átváltjuk a menü állapotát (nyitott/bezárt)
  };

  // Kiválasztott nyelvet eltávolítjuk a listából
  const otherLanguages = languages.filter(
    (language) => language !== selectedLanguage
  );

  return (
    <div className="language-switcher">
      <button onClick={toggleMenu} className="language-button">
        {selectedLanguage.toUpperCase()}
      </button>
      {isOpen && (
        <div className="language-options">
          {otherLanguages.map((language) => (
            <button
              key={language}
              className={selectedLanguage === language ? "selected" : ""}
              onClick={() => changeLanguage(language)}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
