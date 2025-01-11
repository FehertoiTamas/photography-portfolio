"use client";
import React from "react";
import "./myWorkPage.css"
import { useTranslation } from 'react-i18next';
import PagesNav from "@/components/PagesNav/PagesNav";

const myWorksPage = () => {
  const { t } = useTranslation();
  return (
    <section className="my-work-page">
      <PagesNav />
      <h2>Portfoliok</h2>
    </section>
  );
};

export default myWorksPage;
