"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle initial mounting
  useEffect(() => {
    setIsMounted(true);

    // Register GSAP plugin after component mounts
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Handle animations after component is mounted
  useEffect(() => {
    if (!isMounted) return;

    const animations = [];
    const screenWidth = window.innerWidth;

    // Only run animations on larger screens
    if (screenWidth > 768) {
      // Navbar text animation
      animations.push(
        gsap.fromTo(
          ".navbar-text",
          {
            opacity: 1,
            scale: 1,
            transformOrigin: "left bottom",
          },
          {
            opacity: 0,
            scale: 0.4,
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

      // Logo animation
      animations.push(
        gsap.fromTo(
          ".logo",
          {
            opacity: 0,
            scale: 0,
            transformOrigin: "right bottom",
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

      // Links animation
      animations.push(
        gsap.fromTo(
          ".links",
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

    // Cleanup function
    return () => {
      animations.forEach((animation) => animation.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted]); // Only run when component mounts

  // Initial render with no animations
  if (!isMounted) {
    return (
      <section className="navbar-container">
        <nav className="navbar">
          <div className="logo">Photography</div>
          <div className="hamburger">
            <FaBars size={30} />
          </div>
          <ul className="links">
            <li>
              <Link href="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link href="/myWorksPage">{t("navbar.my_works")}</Link>
            </li>
            <li>
              <Link href="/contactMe">{t("navbar.contact_me")}</Link>
            </li>
            <LanguageSwitcher />
          </ul>
        </nav>
        <p className="navbar-text">photography</p>
      </section>
    );
  }

  // Full render with animations
  return (
    <section className="navbar-container">
      <nav className="navbar">
        <div className="logo">Photography</div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={`links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link href="/">{t("navbar.home")}</Link>
          </li>
          <li>
            <Link href="/myWorksPage">{t("navbar.my_works")}</Link>
          </li>
          <li>
            <Link href="/contactMe">{t("navbar.contact_me")}</Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </nav>
      <p className="navbar-text">photography</p>
    </section>
  );
}
