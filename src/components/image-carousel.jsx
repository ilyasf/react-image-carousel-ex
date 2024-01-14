import React, { useState } from "react";
import "./image-carousel.css";

const ReactImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrev = () => {
    setSelectedImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setSelectedImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="carousel-container">
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
    </div>
  );
};

export default ReactImageCarousel;
