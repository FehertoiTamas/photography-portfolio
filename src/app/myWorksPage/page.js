// MyWorksPage.jsx
"use client";
import React, { useState, useCallback } from "react";
import Image from "next/legacy/image";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import PagesNav from "@/components/PagesNav/PagesNav";
import "./myWorkPage.css";


const portfolios = [
  {
    id: 1,
    title: "Cuba",
    text: "Cuba",
    images: [
      {
        src: "/portfolio1/image1.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image2.webp",
        aspectRatio: "portrait",
        likes: 5
      },
      {
        src: "/portfolio1/image3.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image4.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image5.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image6.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image7.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image8.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio1/image9.webp",
        aspectRatio: "landscape",
        likes: 0
      },
    ],
  },

  {
    id: 2,
    title: "Galapagos",
    text: "Galapagos",
    images: [
      {
        src: "/portfolio2/image1.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio2/image2.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio2/image3.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio2/image4.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio2/image5.webp",
        aspectRatio: "landscape",
        likes: 0

      },
      {
        src: "/portfolio2/image6.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio2/image7.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio2/image8.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio2/image9.webp",
        aspectRatio: "landscape",
        likes: 0
      }
    ],
  },

  {
    id: 3,
    title: "Peru",
    text: "Peru",
    images: [
      {
        src: "/portfolio3/image1.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio3/image2.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio3/image3.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio3/image4.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio3/image5.webp",
        aspectRatio: "landscape",
        likes: 0

      },
      {
        src: "/portfolio3/image6.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio3/image7.webp",
        aspectRatio: "landscape",
        likes: 0
      },
      {
        src: "/portfolio3/image8.webp",
        aspectRatio: "portrait",
        likes: 0
      },
      {
        src: "/portfolio3/image9.webp",
        aspectRatio: "landscape",
        likes: 0
      }
    ],
  },
];

const MyWorksPage = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setSelectedImageIndex(null);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = useCallback((e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedPortfolio.images.length - 1
    );
  }, [selectedPortfolio]);

  const handleNextImage = useCallback((e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex < selectedPortfolio.images.length - 1 ? prevIndex + 1 : 0
    );
  }, [selectedPortfolio]);

  // Billentyűzet kezelés
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          handlePrevImage(e);
          break;
        case 'ArrowRight':
          handleNextImage(e);
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handlePrevImage, handleNextImage]);

  const getGridSpan = (aspectRatio) => {
    // Nagyobb területet foglalunk a kiemelt képeknek
    return aspectRatio === "portrait" ? "tall" : "wide";
  };

  const handleLike = (e, portfolioId, imageIndex) => {
    e.stopPropagation(); // Megakadályozza a lightbox megnyitását kattintáskor

    const imageKey = `${portfolioId}-${imageIndex}`;
    setLikedImages(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(imageKey)) {
        newLikes.delete(imageKey);
        selectedPortfolio.images[imageIndex].likes--;
      } else {
        newLikes.add(imageKey);
        selectedPortfolio.images[imageIndex].likes++;
      }
      return newLikes;
    });
  };

  const isImageLiked = (portfolioId, imageIndex) => {
    return likedImages.has(`${portfolioId}-${imageIndex}`);
  };

  return (
    <section className="my-work-page">
      <PagesNav />
      <div className="portfolio-selector">
        {portfolios.map((portfolio) => (
          <p
            key={portfolio.id}
            data-text={portfolio.text}
            onClick={() => handlePortfolioClick(portfolio)}
            className={`portfolio-button ${selectedPortfolio?.id === portfolio.id ? "active" : ""
              }`}
          >
            {portfolio.title}
          </p>
        ))}
      </div>

      <div className="portfolio-gallery">
        {selectedPortfolio?.images.map((image, index) => (
          <div
            key={index}
            className={`portfolio-image-container ${getGridSpan(image.aspectRatio)}`}
            onClick={() => handleImageClick(index)}
          >
            <div className="image-wrapper">
              <Image
                src={image.src}
                alt={`Portfolio ${selectedPortfolio.id} Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="portfolio-image"
              />
              <div className="like-container">
                <button
                  className={`like-button ${isImageLiked(selectedPortfolio.id, index) ? 'liked' : ''}`}
                  onClick={(e) => handleLike(e, selectedPortfolio.id, index)}
                >
                  <Heart
                    className="heart-icon"
                    fill={isImageLiked(selectedPortfolio.id, index) ? "#ff0000" : "none"}
                  />
                  {image.likes > 0 && <span className="like-count">{image.likes}</span>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>

          <button className="lightbox-nav lightbox-prev" onClick={handlePrevImage}>
            <ChevronLeft size={40} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="ligthbox-image-wrapper
            "><Image
                src={selectedPortfolio.images[selectedImageIndex]}
                alt={`Image ${selectedImageIndex + 1}`}
                layout="fill"
                objectFit="contain" className="lightbox-image"
              />
            </div>
            <div className="lightbox-counter">
              {selectedImageIndex + 1} / {selectedPortfolio.images.length}
            </div>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={handleNextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default MyWorksPage;