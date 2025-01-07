"use client";
import { useEffect } from "react";
import "./Portfolio.css";
import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    // Animálás a h2 elemekre
    const titleText = document.querySelector(".portfolio-text");
    const chars = titleText.textContent.split(""); // Szöveg karakterekre bontása
    titleText.innerHTML = chars.map((char) => `<span>${char}</span>`).join(""); // Minden karaktert span-ba csomagol

    const charSpans = document.querySelectorAll(".portfolio-text span");

    gsap.set(".portfolio-text", { perspective: 400 });

    gsap.from(charSpans, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".portfolio-text",
        start: "top 80%", // Animáció indítása, amikor a szekció 80%-nál láthatóvá válik
        end: "bottom 50%",
        toggleActions: "play none none reverse", // Scrollra visszafordítható animáció
        markers: true,
      },
    });
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-side-text">
          <span className="numbers">0</span>
          <span className="numbers">1</span>
        </div>
        <div className="portfolio-image">
          <Image
            className="portfolio-image-next"
            src="/portfolio01.webp"
            alt=""
            objectFit="cover"
            priority={true}
            width={1100} // Set an appropriate width
            height={800} // Set a valid height (or calculate it based on aspect ratio)
          />
        </div>
      </div>
      <div className="portfolio-container">
        <h2 className="portfolio-text">
          "Fedezd fel Kuba színeit és történeteit egy lenyűgöző fotósorozaton
          keresztül, amely az élet pezsgését és az idő varázsát örökíti meg."
        </h2>
      </div>

      <div className="portfolio-container">
        <h2 className="portfolio-text">
          "Merülj el a Galápagos-szigetek lenyűgöző világában egy fotósorozaton
          keresztül, amely a természet érintetlen szépségét és az egyedülálló
          élővilágot tárja eléd."
        </h2>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-image">
          <Image
            className="portfolio-image-next"
            src="/portfolio02.webp"
            alt=""
            objectFit="cover"
            priority={true}
            width={1100} // Set an appropriate width
            height={800} // Set a valid height (or calculate it based on aspect ratio)
            layout="intrinsic"
          />
        </div>

        <div className="portfolio-side-text">
          <span className="numbers">0</span>
          <span className="numbers">2</span>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-side-text">
          <span className="numbers">0</span>
          <span className="numbers">3</span>
        </div>
        <div className="portfolio-image">
          <Image
            className="portfolio-image-next"
            src="/portfolio03.webp"
            alt=""
            objectFit="cover"
            priority={true}
            width={1100} // Set an appropriate width
            height={800} // Set a valid height (or calculate it based on aspect ratio)
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <h2 className="portfolio-text">
          "Fedezd fel Peru varázslatos tájait és kulturális kincseit egy
          lenyűgöző fotósorozaton keresztül, amely az Andok csodáit és az ősi
          civilizációk nyomait tárja eléd."{" "}
        </h2>
      </div>
    </section>
  );
};

export default Portfolio;
