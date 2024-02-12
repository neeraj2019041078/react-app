import React from "react";
import img1 from "../../images/glassdoor.jpg";
import img2 from "../../images/clutch.jpg";
import img3 from "../../images/upwork.jpg";
import card1 from "../../images/Cards/card1.png";
import card2 from "../../images/Cards/card2.png";
import card3 from "../../images/Cards/card3.png";
import card4 from "../../images/Cards/card4.png";
import card5 from "../../images/Cards/card5.png";
import card6 from "../../images/Cards/card6.png";
import "./Body.css";
import "../../index.css";

import VerticalCarousel from "../Caurosel/Caurosel";
import { CardDefault } from "../Card/Card";
const Body = () => {
  const imagesWithLinks = [
    {
      url: img1,
      link: "https://clutch.co/profile/webnyxa-technologies#summary",
    },
    {
      url: img2,
      link: "https://clutch.co/profile/webnyxa-technologies#summary",
    },
    {
      url: img3,
      link: "https://clutch.co/profile/webnyxa-technologies#summary",
    },
  ];

  const image = [
    {
      url: card1,
      caption: "Graphic Design",
    },
    {
      url: card2,
      caption: "IT Consulting",
    },
    {
      url: card3,
      caption: "Mobile App Development",
    },
    {
      url: card4,
      caption: "Software Development",
    },
    {
      url: card5,
      caption: "Web Development",
    },
    {
      url: card6,
      caption: "Digital Marketing",
    }
  ];

  return (
    <>
      <div className="parent">
        <div className="child">
          <h1 className="custom-h1">
            Our Works Speaks <br /> For Itself
          </h1>
        </div>
        <div className="child2">
          <VerticalCarousel images={imagesWithLinks} />
        </div>
      </div>
      <section>
        <div className="parent1">
          <div className="child1">
            <h1>
              Value-Added <br /> <span className="gservices"> Services</span>
            </h1>
            <h1>
              that Drive Superior <br /> Outcomes
            </h1>
            <div className="button1">
          <button>
            Get a Quote 
          </button>

          </div>
          </div>

          
          <div className="cards">
            <CardDefault link={image} />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Body;
