import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//ICON
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

function Responsive({ children }) {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  function SampleNextArrow() {
    return (
      <button className="bg-black active:scale-90 p-3 md:p-5 rounded-full mx-5 absolute right-0 z-10" onClick={next}>
        <ArrowRight color="white" />
      </button>
    );
  }

  function SamplePrevArrow() {
    return (
      <button
        className="bg-black active:scale-90 p-3 md:p-5 rounded-full mx-5 absolute left-0 z-10"
        onClick={previous}
      >
        <ArrowLeft color="white" />
      </button>
    );
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "flex gap-5 items-center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
}

export default Responsive;
