import React, { useState, useEffect } from 'react';
import "./Caurosel.css";

const VerticalCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

 

  return (
  <>
     <div className="vertical-carousel">
      <div className={`vertical-carousel__image`}>
      
        <a href={images[currentSlide].link}>
          <img src={images[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />
        </a>
      </div>
    </div>
    

  </>
 
  );
};

export default VerticalCarousel;
