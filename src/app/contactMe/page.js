"use client";
import "./contactMe.css";
import { useState, useEffect, useCallback } from "react";
import PagesNav from "@/components/PagesNav/PagesNav";
import { SiFacebook, SiTiktok, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideoFinished(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="background-video-container">
        <PagesNav />
        <video className="background-video" muted>
          <source src="/contact-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h2>{t("contact_me")}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="background-video-container">
      <PagesNav />
      <video
        autoPlay
        muted
        className={`background-video ${isVideoFinished ? "shrink" : ""}`}
        onEnded={handleVideoEnd}
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`content ${isVideoFinished ? "show-content" : ""}`}>
        <h2>{t("contact_me")}</h2>
      </div>
      {isVideoFinished && (
        <div className={`contact-info active`}>
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
            <FiMail size={52} />
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