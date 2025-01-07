"use client";
import "./Portfolio.css";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GrBottomCorner, GrTopCorner } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const titleTexts = document.querySelectorAll(".portfolio-text");

      titleTexts.forEach((titleText) => {
        // Szöveg szavakra bontása és span elemekbe csomagolása
        const words = titleText.textContent.trim().split(" ");
        titleText.innerHTML = words
          .map((word) => `<span class="word">${word}</span>`)
          .join(" ");

        const wordSpans = titleText.querySelectorAll(".word");

        // Kezdeti állapot beállítása
        gsap.set(wordSpans, { opacity: 0, y: 60 });

        // Animáció beállítása fluid hullámhatással
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "sine.inOut", // Lágyabb, folyékony mozgás
          stagger: {
            amount: 0.6, // Az animáció teljes időtartama
            from: "center", // Középről kifelé induló hullám
            ease: "sine.inOut", // Stagger időzítésének simítása
          },
          scrollTrigger: {
            trigger: titleText,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            markers: false, // Fejlesztési jelölők kikapcsolása, ha nem szükséges
          },
        });
      });
    }
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-side-text">
          <span className="numbers">0</span>
          <span className="numbers">1</span>
        </div>
        <div
          className="portfolio-image"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className="portfolio-image-next"
            src="/portfolio01.webp"
            alt=""
            priority
            width={1100} // Set an appropriate width
            height={800} // Set a valid height (or calculate it based on aspect ratio)
          />
          {hovered && (
            <div className="focus-lines">
              <div className="focus-line top-left">
                <GrTopCorner size={80} />
              </div>
              <div className="focus-line top-right">
                <GrTopCorner style={{ transform: "rotate(90deg)" }} size={80} />
              </div>
              <div className="focus-line bottom-left">
                <GrBottomCorner
                  style={{ transform: "rotate(90deg)" }}
                  size={80}
                />
              </div>
              <div className="focus-line bottom-right">
                <GrBottomCorner size={80} />
              </div>
            </div>
          )}
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
        <div
          className="portfolio-image"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className="portfolio-image-next"
            src="/portfolio02.webp"
            alt=""
            priority
            width={1100} // Set an appropriate width
            height={800} // Set a valid height (or calculate it based on aspect ratio)
            layout="intrinsic"
          />
          {hovered && (
            <div className="focus-lines">
              <div className="focus-line top-left">
                <GrTopCorner size={80} />
              </div>
              <div className="focus-line top-right">
                <GrTopCorner style={{ transform: "rotate(90deg)" }} size={80} />
              </div>
              <div className="focus-line bottom-left">
                <GrBottomCorner
                  style={{ transform: "rotate(90deg)" }}
                  size={80}
                />
              </div>
              <div className="focus-line bottom-right">
                <GrBottomCorner size={80} />
              </div>
            </div>
          )}
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
        <div
          className="portfolio-image"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className="portfolio-image-next"
            src="/portfolio03.webp"
            alt=""
            priority
            width={1100} // Set an appropriate width
            height={800} // Set a valid height (or calculate it based on aspect ratio)
            layout="intrinsic"
          />
          {hovered && (
            <div className="focus-lines">
              <div className="focus-line top-left">
                <GrTopCorner size={80} />
              </div>
              <div className="focus-line top-right">
                <GrTopCorner style={{ transform: "rotate(90deg)" }} size={80} />
              </div>
              <div className="focus-line bottom-left">
                <GrBottomCorner
                  style={{ transform: "rotate(90deg)" }}
                  size={80}
                />
              </div>
              <div className="focus-line bottom-right">
                <GrBottomCorner size={80} />
              </div>
            </div>
          )}
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
