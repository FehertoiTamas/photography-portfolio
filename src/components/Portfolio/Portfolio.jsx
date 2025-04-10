"use client";
import "./Portfolio.css";
import { useEffect, useState, useCallback } from "react";
import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GrBottomCorner, GrTopCorner } from "react-icons/gr";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AiOutlineDoubleRight } from "react-icons/ai";

// Portfolio Image Component
const PortfolioImage = ({ src, alt, index, onHover }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const imageContainer = document.querySelector(`#portfolio-image-${index}`);
    if (imageContainer) {
      observer.observe(imageContainer);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      id={`portfolio-image-${index}`}
      className="portfolio-image"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <Link href="/myWorksPage">
        {isVisible && (
          <Image
            className="portfolio-image-next"
            src={src}
            alt={alt}
            priority={index === 0}
            width={1100}
            height={800}
            loading={index === 0 ? "eager" : "lazy"}
          />
        )}
        {onHover && (
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
      </Link>
    </div>
  );
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredImages, setHoveredImages] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  // Initial mount effect
  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Handle hover state for each image
  const handleHover = useCallback((index, isHovered) => {
    setHoveredImages((prev) => ({
      ...prev,
      [index]: isHovered,
    }));
  }, []);

  // GSAP animations effect
  useEffect(() => {
    if (!isMounted) return;

    const texts = gsap.utils.toArray(".portfolio-text");
    const animations = [];

    texts.forEach((text) => {
      const animation = gsap.fromTo(
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
      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => {
        if (animation && animation.kill) {
          animation.kill();
        }
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted]);

  const portfolioData = [
    {
      src: "/portfolio01.webp",
      alt: t("portfolio.cuba"),
      index: 0,
    },
    {
      src: "/portfolio02.webp",
      alt: t("portfolio.galapagos"),
      index: 1,
    },
    {
      src: "/portfolio03.webp",
      alt: t("portfolio.peru"),
      index: 2,
    },
  ];

  if (!isMounted) {
    return (
      <section className="portfolio">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`portfolio-container ${
              index % 2 === 0 ? "reverse" : ""
            }`}
          >
            {index % 2 === 0 && (
              <div className="portfolio-side-text">
                <span className="numbers">0{index + 1}</span>
              </div>
            )}
            <PortfolioImage
              src={item.src}
              alt={item.alt}
              index={index}
              onHover={(isHovered) => handleHover(index, isHovered)}
            />
            {index % 2 === 1 && (
              <div className="portfolio-side-text">
                <span className="numbers">0{index + 1}</span>
              </div>
            )}
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="portfolio">
      {portfolioData.map((item, index) => (
        <div
          key={index}
          className={`portfolio-container ${index % 2 === 0 ? "reverse" : ""}`}
        >
          {index % 2 === 0 && (
            <div className="portfolio-side-text">
              <span className="numbers">0{index + 1}</span>
            </div>
          )}
          <PortfolioImage
            src={item.src}
            alt={item.alt}
            index={index}
            onHover={(isHovered) => handleHover(index, isHovered)}
          />
          {index % 2 === 1 && (
            <div className="portfolio-side-text">
              <span className="numbers">0{index + 1}</span>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
