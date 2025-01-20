"use client";
import { useEffect } from "react";
import "./AboutMe.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animációk és trigger-ek gyűjtése
      const animations = [];

      // Ellenőrizzük a képernyőméretet
      const screenWidth = window.innerWidth;

      if (screenWidth > 768) {
        const aboutImage = document.querySelector(".about-image img");
        const animation1 = gsap.fromTo(
          aboutImage,
          {
            y: 100, // Kezdő pozíció
            opacity: 0, // Kezdettől fogva átlátszó
          },
          {
            y: 0, // Végállapot
            opacity: 1, // Az animáció végére láthatóvá válik
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-image",
              start: "top bottom",
              end: "top center",
              toggleActions: "restart none none none",
              markers: false,
            },
          }
        );
        animations.push(animation1);

        const aboutMe = document.querySelector(".about-container");
        const animation2 = gsap.fromTo(
          aboutMe,
          { opacity: 0, scale: 0.8 }, // Kezdőállapot
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".about-container",
              start: "center 150%",
              end: "center 60%",
              scrub: true,
              markers: false,
            },
          }
        );
        animations.push(animation2);
      }

      // Cleanup funkció a komponens eltávolításakor
      return () => {
        // Minden animáció törlése
        animations.forEach((animation) => animation.kill());
        // Minden ScrollTrigger törlése
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section className="about-me">
      <div className="about-container">
        <div className="about-image">
          <Image
            className="about-image"
            src="/about-me.webp"
            alt="About Me Image"
            priority
            width={400}
            height={0}
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">{t("about_me.title")}</h2>
          <div className="about-content-text">
            <p>{t("about_me.welcome")}</p>
            <p>{t("about_me.introduction")}</p>
            <p>
              <span>"{t("about_me.quotes")}"</span>
            </p>
            <Link href="/contactMe">
              <button className="contact-btn">{t("navbar.contact_me")}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
