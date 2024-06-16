import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "./SliderArrow";
import PartnerItem from "./PartnerItem";

const PartnerSlider = ({ partners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3, 
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
    afterChange: (index) => setCurrentSlide(index),
  };



  const totalPages = Math.ceil(partners.length / settings.slidesToShow);

  const handlePaginationClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index * settings.slidesToScroll);
    }
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {partners.map((partner, index) => (
          <PartnerItem key={index} logo={partner.logo} name={partner.name} />
        ))}
      </Slider>
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 p-2 rounded-full ${
              currentSlide >= index * settings.slidesToScroll &&
              currentSlide < (index + 1) * settings.slidesToScroll
                ? "bg-green-500"
                : "bg-gray-500"
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default PartnerSlider;
