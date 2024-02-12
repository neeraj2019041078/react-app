import React, { useState, useEffect } from "react";
import "../../index.css";
import certified from "../../images/certified.png";
import rated from "../../images/rated.png";
import bigp from "../../images/bigp.webp";
import caurosel2 from "../../images/caurosel2.webp";
import caurosel3 from "../../images/caurosel3.webp";
import appstore from "../../images/app-store.png";
import googleplay from "../../images/google-play.png";

import Carousel from "../Caurosel/Caurosel";
import "./Header.css";

const Header = () => {
  const slides = [
    { id: 1, image: bigp, caption: 'Image 1 caption' },
    { id: 3, image: caurosel3, caption: 'Image 3 caption' },
    { id: 2, image: caurosel2, caption: 'Image 2 caption' }
   
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="banner">
      <div className="heading">
        <span className="quality-tag">
          ENJOY QUALITY WITH VALUE FOR MONEY
        </span>
        <span className="logo-trust">
          <img src={rated} alt=" rated" />
          <img src={certified} alt="certified" />
        </span>
        <div className="content-column">
          <h1>
            LEADING <span className="client-centric">CLIENT-CENTRIC</span>
            <span className="website-green">WEB/APP</span>{" "}
            <span className="hello">DESIGN</span> &amp;{" "}
            <span>DEVELOPMENT</span>
          </h1>
          <p className="paragraph">
            We specialize in providing highly secure and stable IT solutions
            for clients across various business segments through web and
            Android/iOS app development with high scalability and efficient
            optimization.
          </p>
        </div>
        <div className="button">
          <button>
            Contact Now <span>-&gt;</span>
          </button>
        </div>
      </div>
      <div className="block">
        <div className="item">
          <img src={slides[currentSlideIndex].image} alt={slides[currentSlideIndex].caption} />
        </div>
        <div className="two-picture">
          <img src={appstore} alt="1" />
          <img src={googleplay} alt="2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
