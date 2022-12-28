import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/prot1.PNG";
import Ecommerce from "../../img/asset.PNG";
import HOC from "../../img/store.PNG";
import MusicApp from "../../img/proto.PNG";
import { themeContext } from "../../Context";
import next from "../../img/next.png"
import previous from "../../img/previous.jpeg"

// import ReactTooltip from 'react-tooltip';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Sidebar, Ecommerce, HOC, MusicApp];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["This is the e-commerce website of baby products, in which admin can manage their all products, categories, brands etc. It has fully customized admin panel with advanced sales and order report",
   "This is the Asseet Management System Dashboard which was created with react and django. It show the respective data entered on configuration panel.Configuration panel need to logged in but dashboard is accessiable to public.", 
   "This is the e-commerce website of store, in which admin can manage their all products, categories, brands etc. It has fully customized admin panel with advanced sales and order report, It is one of the tenant created by multi-tenant system",
    "This is My Protfolio Website which was created with react"];

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    setCurrentTextIndex((currentTextIndex + 1) % texts.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
    setCurrentTextIndex((currentTextIndex + 1) % texts.length);
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="slider-img">
      <a className="left" onClick={handleNext}>prev</a>
      <img className="swip" src={images[currentImageIndex]} alt="Current image" />
      <a className="right" onClick={handleNext}>Next</a>
      <p>{texts[currentTextIndex]}</p>
      </div>
    </div>
  );
};

export default Portfolio;
