import React from "react";
import Slider from "react-slick";

import { ExecutiveTeamMember } from "./ExecutiveTeam";
import { NewsTile } from "./News";

import "./Slider.css";

const NewsSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className="dots-list">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <button className="dot-item"></button>,
  };

  return (
    <div>
      <Slider {...settings} className="news-slider sm:px-6">
        {children}
      </Slider>
    </div>
  );
};

export default NewsSlider;
