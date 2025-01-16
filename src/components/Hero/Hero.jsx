"use client";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/legacy/image";
import { SiFacebook, SiTiktok, SiInstagram } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // Handle initial mounting and GSAP registration
  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Handle animations after component is mounted
  useEffect(() => {
    if (!isMounted) return;

    const animations = [];
    const screenWidth = window.innerWidth;

    // Hero title animation for larger screens
    if (screenWidth > 768) {
      animations.push(
        gsap.fromTo(
          ".hero-title",
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".navbar-text",
              start: "center 20%",
              end: "bottom 10%",
              scrub: true,
              markers: false,
            },
          }
        )
      );
    }

    // Social icons animations
    animations.push(
      gsap.fromTo(
        ".social-icon3",
        { x: "300%" },
        {
          x: "0%",
          scrollTrigger: {
            trigger: ".social-icon3",
            start: "top bottom",
            end: "+=500",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          },
          ease: "power2.out",
        }
      )
    );

    animations.push(
      gsap.fromTo(
        ".social-icon1",
        { x: "-300%" },
        {
          x: "0%",
          scrollTrigger: {
            trigger: ".social-icon1",
            start: "top bottom",
            end: "+=500",
            scrub: 1.5,
            toggleActions: "play none none reverse",
            markers: false,
          },
          ease: "power2.out",
        }
      )
    );

    // Cleanup function
    return () => {
      animations.forEach((animation) => animation.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted]); // Only run when component mounts

  // Initial render for SSR
  if (!isMounted) {
    return (
      <section className="hero">
        <Image
          className="her0-image"
          src="/hero.webp"
          alt="Hero Image"
          priority
          layout="fill"
        />
        <h1 className="hero-title">{t("hero.title")}</h1>
        <div className="social-icons-wrapper">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon social-icon1"
          >
            <SiFacebook size={52} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiInstagram size={52} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon social-icon3"
          >
            <SiTiktok size={52} />
          </a>
        </div>
      </section>
    );
  }

  // Full render with animations enabled
  return (
    <section className="hero">
      <Image
        className="her0-image"
        src="/hero.webp"
        alt="Hero Image"
        priority
        layout="fill"
      />
      <h1 className="hero-title">{t("hero.title")}</h1>
      <div className="social-icons-wrapper">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon social-icon1"
        >
          <SiFacebook size={52} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <SiInstagram size={52} />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon social-icon3"
        >
          <SiTiktok size={52} />
        </a>
      </div>
    </section>
  );
}
