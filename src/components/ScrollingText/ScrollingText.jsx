"use client";
import "./ScrollingText.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

const ScrollingText = () => {
  const { t } = useTranslation();

  return (
    <div className="scroll-container">
      <div className="scroll-text-container">
        <p className="scroll-text">{t("scrolling_text")}</p>
      </div>
    </div>
  );
};

export default ScrollingText;
