import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./style.module.scss";

const Carousel = ({ data,children,setting }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    autoplay:false,
    infinite:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    ...setting
  };
  return (
    <div className="bg-primary-bg ">
      <div>
        <Slider {...settings} className={styles.sliderWrapper}>
          {children}
          {/* {data.items.map((item, idx) => (
            <div key={idx} className="px-2">
              <Card data={item} />
            </div>
          ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
