'use client';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import { useTranslation } from 'react-i18next';



gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    if (typeof window !== "undefined") {

      // Animációk és trigger-ek gyűjtése
      const animations = [];

      // Ellenőrizzük a képernyőméretet
      const screenWidth = window.innerWidth;

      if (screenWidth > 768) {
        const animation1 = gsap.fromTo(
          ".navbar-text",
          { opacity: 1, scale: 1, transformOrigin: "left bottom" },
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
        );
        animations.push(animation1);

      }

      if (screenWidth > 768) {
        const animation2 = gsap.fromTo(
          ".logo",
          { opacity: 0, scale: 0, transformOrigin: "right bottom" },
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
        );

        animations.push(animation2);
      }

      // Animation 3 csak nagyobb képernyőkön
      if (screenWidth > 768) {
        const animation3 = gsap.fromTo(
          ".links",
          { opacity: 0, scale: 0 },
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
        );
        animations.push(animation3);
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
    <>
      <section className="navbar-container">
        <nav className="navbar">
          <div className="logo">Photography</div>
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul className={`links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#" data-text="Home">Home</a></li>
            <li><a href="#" data-text="About Me">About Me</a></li>
            <li><a href="#" data-text="My Works">My Works</a></li>
            <li><a href="#" data-text="Extras">Extras</a></li>
            <li><a href="#" data-text="Contact">Contact</a></li>
          </ul>
          <LanguageSwitcher />
        </nav>
        <p className="navbar-text">{t('teszt')}</p>
      </section>
    </>
  );
}
