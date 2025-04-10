"use client";
import "./contactMe.css";
import { useState, useEffect, useCallback } from "react";
import PagesNav from "@/components/PagesNav/PagesNav";
import { SiFacebook, SiTiktok, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// Social media links configuration
const SOCIAL_LINKS = {
  whatsapp: {
    url: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/1234567890",
    icon: SiWhatsapp,
    label: "WhatsApp"
  },
  email: {
    url: process.env.NEXT_PUBLIC_EMAIL_URL || "mailto:someone@example.com",
    icon: FiMail,
    label: "Email"
  },
  facebook: {
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com",
    icon: SiFacebook,
    label: "Facebook"
  },
  instagram: {
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com",
    icon: SiInstagram,
    label: "Instagram"
  },
  tiktok: {
    url: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com",
    icon: SiTiktok,
    label: "TikTok"
  }
};

const ContactMe = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideoFinished(true);
    // Add a small delay before showing content for smoother transition
    setTimeout(() => {
      setIsContentVisible(true);
    }, 500);
  }, []);

  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const renderSocialLinks = () => (
    <div className={`contact-info ${isContentVisible ? 'active' : ''}`}>
      {Object.entries(SOCIAL_LINKS).map(([key, { url, icon: Icon, label }]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('contact_me')} - ${label}`}
          className="contact-link"
        >
          <Icon className="contact-icon" />
        </a>
      ))}
    </div>
  );

  if (!isMounted) {
    return (
      <section className="background-video-container">
        <PagesNav />
        <div className="video-wrapper">
          <video
            className="background-video"
            muted
            preload="metadata"
          >
            <source src="/contact-bg.mp4" type="video/mp4" />
            {t('video_not_supported')}
          </video>
          {!isVideoLoaded && <div className="video-placeholder" />}
        </div>
        <div className="content">
          <h2>{t("contact_me")}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="background-video-container">
      <PagesNav />
      <div className="video-wrapper">
        <video
          autoPlay
          muted
          className={`background-video ${isVideoFinished ? "shrink" : ""}`}
          onEnded={handleVideoEnd}
          onLoadedData={handleVideoLoad}
          preload="metadata"
        >
          <source src="/contact-bg.mp4" type="video/mp4" />
          {t('video_not_supported')}
        </video>
        {!isVideoLoaded && <div className="video-placeholder" />}
      </div>
      <div className={`content ${isContentVisible ? "show-content" : ""}`}>
        <h2 className="contact-title">{t("contact_me")}</h2>
      </div>
      {isVideoFinished && renderSocialLinks()}
    </section>
  );
};

export default ContactMe;