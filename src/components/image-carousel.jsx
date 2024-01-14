// src/ReactImageCarousel.jsx
import React, { useState, useEffect } from "react";
import "./image-carousel.css";

const ReactImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setSelectedImage((prevImage) => (prevImage + 1) % images.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handleClick = (index) => {
    setSelectedImage(index);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, 5000);
  };

  const handlePrev = () => {
    setSelectedImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  const handleNext = () => {
    setSelectedImage((prevImage) => (prevImage + 1) % images.length);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <div className="carousel-container">
      <div className="image-preview-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`image-preview ${
              index === selectedImage ? "selected" : ""
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="main-carousel">
        <button className="arrow" onClick={handlePrev}>
          &lt;
        </button>
        <img
          src={images[selectedImage]}
          alt={`Image ${selectedImage}`}
          className="main-image"
        />
        <button className="arrow" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ReactImageCarousel;
