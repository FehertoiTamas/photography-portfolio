"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LensLines.css";

const LensLines = () => {
  const linePattern = [
    { length: 60, label: "-25" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "-20" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "-15" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "-10" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "-5" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "0" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "5" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "10" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 60, label: "15" },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
    { length: 50, label: null },
  ];

  const [isMounted, setIsMounted] = useState(false);

  // Handle initial mounting and GSAP registration
  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    // GSAP animáció inicializálása ScrollTrigger-rel
    gsap.fromTo(
      ".lens-animation",
      {
        x: -100, // Mozgás jobbra
      },
      {
        x: 100, // Mozgás jobbra

        duration: 1, // Hosszabb animációs idő
        ease: "sine.inOut", // Finomabb ease típus
        scrollTrigger: {
          trigger: ".lens-container",
          start: "top bottom",
          end: "bottom 20%",
          scrub: 1, // Puhább görgetés szinkronizálás
          markers: false, // Ne jelenjenek meg marker-ek az animációban
        },
      }
    );
  }, []);

  return (
    <div className="lens-container">
      <div className="lens-animation">
        {linePattern.map((line, index) => (
          <div className="line-container" key={index}>
            {line.label && <div className="line-label">{line.label}</div>}
            <div
              className="lens-line"
              style={{
                height: `${line.length}px`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LensLines;
