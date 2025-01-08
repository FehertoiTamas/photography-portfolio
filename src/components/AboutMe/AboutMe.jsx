"use client";
import { useEffect } from "react";
import "./AboutMe.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animációk és trigger-ek gyűjtése
      const animations = [];

      // Ellenőrizzük a képernyőméretet
      const screenWidth = window.innerWidth;

      if (screen > 768) {
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
              start: "center bottom",
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
          <h2 className="about-title">Eva Sipos</h2>
          <div className="about-content-text">
            <p>Hello and thank you visiting my website!</p>
            <p>
              As a passionate photographer, I strive to capture the beauty,
              emotion, and unique stories in every moment. Whether it’s the
              vibrant energy of a bustling cityscape, the quiet intimacy of a
              portrait, or the breathtaking majesty of nature, I believe every
              image has the power to connect us to something deeper. With a keen
              eye for detail and a creative approach, I work to transform
              ordinary scenes into extraordinary memories. My goal is not just
              to take pictures, but to create timeless visual narratives that
              inspire and resonate. Let’s create something unforgettable
              together.
            </p>
            <p>
              <span>
                "A fényképezés nem csupán a látványról szól, hanem arról az
                érzésről, amit a pillanat ébreszt bennünk."
              </span>
            </p>
            <button className="contact-btn">Contact me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
