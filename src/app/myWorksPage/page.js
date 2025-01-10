"use client";
import React from "react";
import "./myWorkPage.css"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const myWorksPage = () => {
  const { t } = useTranslation();
  return (
    <section className="my-work-page">
      <LanguageSwitcher />
      <h2>{t('welcome')}</h2>
    </section>
  );
};

export default myWorksPage;
