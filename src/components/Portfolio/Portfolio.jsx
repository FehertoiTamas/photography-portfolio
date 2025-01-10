"use client";
import "./Portfolio.css";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GrBottomCorner, GrTopCorner } from "react-icons/gr";
import Link from "next/link";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const texts = gsap.utils.toArray(".portfolio-text");

    texts.forEach((text) => {
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-container reverse">
        <div className="portfolio-side-text">
          <span className="numbers">0</span>
          <span className="numbers">1</span>
        </div>
        <div
          className="portfolio-image"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link href="/myWorksPage">
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
                  <GrTopCorner
                    style={{ transform: "rotate(90deg)" }}
                    size={80}
                  />
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
          </Link>
        </div>
      </div>

      <div className="portfolio-container">
        <h2 className="portfolio-text">"{t("portfolio.cuba")}"</h2>
      </div>

      <div className="portfolio-container">
        <h2 className="portfolio-text">"{t("portfolio.galapagos")}"</h2>
      </div>
      <div className="portfolio-container reverse">
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
        <h2 className="portfolio-text">"{t("portfolio.peru")}"</h2>
      </div>
    </section>
  );
};

export default Portfolio;
