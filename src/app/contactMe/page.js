"use client";
import "./contactMe.css";
import { useState, useEffect } from "react";
import PagesNav from "@/components/PagesNav/PagesNav";
import { SiFacebook, SiTiktok, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();
  const [videoEnded, setVideoEnded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  // useEffect a form megjelenítésére és animációjára
  useEffect(() => {
    if (videoEnded) {
      setTimeout(() => {
        setIsFormVisible(true); // A form megjelenítése 0.5 másodperccel a videó vége után
      }, 800);  // Késleltetés az animáció elindulásához
    }
  }, [videoEnded]);

  return (
    <section className="background-video-container">
      <PagesNav />
      <video
        autoPlay
        muted
        className={`background-video ${videoEnded ? "shrink" : ""}`}
        onEnded={handleVideoEnd}
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`content ${videoEnded ? "show-content" : ""}`}>
        <h2>{t("contact_me")}</h2>
      </div>
      {isFormVisible && (
        <div className={`contact-info ${isFormVisible ? "active" : ""}`}>
          {/* Social Icons */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon">
            <SiWhatsapp size={52} />
          </a>

          <a
            href="mailto:someone@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon">
            <FiMail size={52}
            />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <SiFacebook size={52} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <SiInstagram size={52} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <SiTiktok size={52} />
          </a>


        </div>
      )}
    </section>
  );
};

export default ContactMe;
