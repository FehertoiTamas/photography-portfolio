"use client";
import "./ScrollingText.css";
import { useTranslation } from "react-i18next";

const ScrollingText = () => {
  const { t } = useTranslation();

  return (
    <div className="scroll-container">
      <div className="scroll-text-container">
        <p className="scroll-text">{t("scrolling_text1")}</p>
        <p className="scroll-text">{t("scrolling_text2")}</p>
        <p className="scroll-text">{t("scrolling_text3")}</p>
      </div>
    </div>
  );
};

export default ScrollingText;
