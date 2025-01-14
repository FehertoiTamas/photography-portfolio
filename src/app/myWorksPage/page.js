"use client";
import "./myWorkPage.css";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import PagesNav from "@/components/PagesNav/PagesNav";
import Image from "next/legacy/image";


const portfolios = [
  {
    id: 1,
    title: "Cuba",
    images: [
      "/portfolio1/image1.webp",
      "/portfolio1/image2.webp",
      "/portfolio1/image3.webp",
      "/portfolio1/image4.webp",
      "/portfolio1/image5.webp",
      "/portfolio1/image6.webp",
      "/portfolio1/image7.webp",
      "/portfolio1/image8.webp",
      "/portfolio1/image9.webp",
    ],
  },
  {
    id: 2,
    title: "Galapagos",
    images: [
      "/images/portfolio2/image1.jpg",
      "/images/portfolio2/image2.jpg",
      "/images/portfolio2/image3.jpg",
    ],
  },
  {
    id: 3,
    title: "Peru",
    images: [
      "/images/portfolio3/image1.jpg",
      "/images/portfolio3/image2.jpg",
      "/images/portfolio3/image3.jpg",
    ],
  },
];

const MyWorksPage = () => {
  const { t } = useTranslation();
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  return (
    <section className="my-work-page">
      <PagesNav />
      <h2>Portfolios</h2>
      <div className="portfolio-selector">
        {portfolios.map((portfolio) => (
          <button
            key={portfolio.id}
            onClick={() => handlePortfolioClick(portfolio)}
            className={`portfolio-button ${selectedPortfolio?.id === portfolio.id ? "active" : ""
              }`}
          >
            {portfolio.title}
          </button>
        ))}
      </div>
      {selectedPortfolio ? (
        <div className="portfolio-gallery">
          {selectedPortfolio.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Portfolio ${selectedPortfolio.id} Image ${index + 1}`}
              width={1200}
              height={800}
              className="portfolio-image"
            />
          ))}
        </div>
      ) : (
        <p>Please select a portfolio to view its images.</p>
      )}
    </section>
  );
};

export default MyWorksPage;
