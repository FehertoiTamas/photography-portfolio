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

      // Animációk és trigger-ek gyűjtése
      const animations = [];

      const animation1 = gsap.fromTo(
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

      animations.push(animation1);

      const animation2 = gsap.fromTo(
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
      );

      animations.push(animation2);

      const animation3 = gsap.fromTo(
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
          },
          ease: "power2.out",
        }
      );

      animations.push(animation3);


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
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon1">
            <SiFacebook size={52} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiInstagram size={52} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon3">
            <SiTiktok size={52} />
          </a>
        </div>

      </section>
    </>
  )
}
