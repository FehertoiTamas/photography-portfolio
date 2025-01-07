"use client";
import { useEffect } from "react";
import "./Portfolio.css";
import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {}, []);

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

      <div className="portfolio-container">3</div>
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
      <div className="portfolio-container">6</div>
    </section>
  );
};

export default Portfolio;
