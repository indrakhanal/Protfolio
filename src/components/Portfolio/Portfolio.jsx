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
  const texts = ["Ecommerce Website ", "Asseet Management System Dashboard", "E-Commerce website", "My Protfolio Website"];

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
      <a className="left" onClick={handleNext}><img className="previous" src={previous} /></a>
      <img className="swip" src={images[currentImageIndex]} alt="Current image" />
      <a className="right" onClick={handleNext}><img className="next" src={next} /></a>
      <p>{texts[currentTextIndex]}</p>
      </div>
    </div>
  );
};

export default Portfolio;
