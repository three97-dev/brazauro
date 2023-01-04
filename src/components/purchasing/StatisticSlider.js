import React from "react";
import Slider from "react-slick";

import "./StatisticSlider.css";

const StatisticSlider = ({ children }) => {
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
      <Slider {...settings} className="statistic-slider sm:px-6">
        {children}
      </Slider>
    </div>
  );
};

export default StatisticSlider;
