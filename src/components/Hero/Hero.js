"use client";
import React, { useEffect } from 'react'
import './Hero.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/legacy/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  useEffect(() => {
    gsap.fromTo(
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

  }, [])

  return (
    <>
      <section className='hero'>
        <Image className='her0-image' src="/hero.webp" alt="Hero Image"
          layout="fill"     // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the section
          priority />
        <h1 className='hero-title'>Portfolio by Eva Sipos</h1>
      </section>
    </>
  )
}
