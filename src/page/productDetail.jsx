import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ProductItem from "../components/ProductItem/ProductItem";
import { getProducts } from "../utils/getData";

const ProductDetail = () => {
  const products = getProducts();

  const setting = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    autoplay: true,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
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
    ]
  };

  const [active, setActive] = useState(0);
  console.log(active);
//   const i = setInterval(() => setActive(active <= 2 ? active + 1 : 0),[1000])
  useEffect(() => {
  }, []);
  
  const imgs = [
    "../../assets/images/product-1.png",
    "../../assets/images/product-2.png",
    "../../assets/images/product-3.png"
  ];
  return (
    <div>
      <div className="flex flex-col justify-center fluid lg:flex-row items-center px-[40px] mx-auto xl:gap-[145px] gap-[50px] w-full">
        <div className="max-w-[466px] w-full flex-1">
          {/* <Carousel setting={setting}> */}
          <div className="relative w-full min-h-[250px] py-[30px]">
            <img src={imgs[0]} alt="w-full" className="w-full opacity-0" />
            {imgs.map((img, idx) => (
              <div className="absolute inset-0 ">
                <img src={img} alt="" className="w-full transition-opacity duration-500" key={idx} style={{opacity: active === idx ? 1 : 0}}/>
              </div>
            ))}
            <ul className="flex gap-[30px] absolute bottom-0 justify-center items-center w-full">
              {imgs.map((img, idx) => (
                <li className="min-h-[20px] min-w-[20px] rounded-full bg-txt2"></li>
              ))}
            </ul>
          </div>
          {/* </Carousel> */}
        </div>
        <div className="grid md:gap-[49px] gap-[24px] max-w-[588px] flex-1">
          <h1 className="text-left max-w-[100%] text-[61px]">
            Cameron Williamson
          </h1>
          <p className="text-left">Hold on I need at least a few minutes!</p>
          <p className="text-[23px] text-left font-light">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="max-w-[275px]">Liên hệ Trúc Chỉ</button>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto md:pt-[127px] pt-[65px]">
        <h4 className="text-left">Sản phẩm liên quan</h4>
        {/* <ListProduct /> */}
        {/* <div className="mb-[127px] grid justify-between w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]"> */}
        <Carousel
          setting={{
            slidesToShow: 3,
            arrows: false,
            responsive: [
              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          }}>
          {products.map((product, idx) => (
            <div className="px-3">
              <ProductItem product={product} key={idx} />
            </div>
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
