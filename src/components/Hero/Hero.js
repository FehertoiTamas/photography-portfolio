"use client";
import React, { useEffect } from 'react'
import './Hero.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/legacy/image";
import { SiFacebook, SiTiktok, SiInstagram } from "react-icons/si";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const animation = gsap.fromTo(
        ".hero-title",
        { opacity: 0, scale: 0 }, // Kezdőállapot
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

      // Cleanup: Törlés a komponens eltávolításakor
      return () => {
        animation.kill(); // Az animáció törlése
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Minden ScrollTrigger törlése
      };
    }
  }, []);
  return (
    <>
      <section className='hero'>
        <Image
          className='her0-image'
          src="/hero.webp"
          alt="Hero Image"
          priority
          layout="fill"
        />
        <h1 className='hero-title'>Portfolio by Eva Sipos</h1>

        {/* Social Icons */}
        <div className="social-icons-wrapper">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiFacebook size={52} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiInstagram size={52} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiTiktok size={52} />
          </a>
        </div>

      </section>
    </>
  )
}
