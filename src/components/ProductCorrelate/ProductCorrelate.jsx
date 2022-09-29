import React from "react";
import { getProducts } from "../../utils/getData";
import Carousel from "../Carousel";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductCorrelate.scss";

const ProductCorrelate = () => {
  const products = getProducts();

  return (
    <section className="product-correlate">
      <Carousel
        setting={{
          slidesToShow: 3,
          slidesToScroll:3,
          arrows: true,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll:2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
              }
            }
          ]
        }}
        customCss="slide-custom">
        {products.map((product, idx) => (
          <div className="px-3">
            <ProductItem product={product} key={idx} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ProductCorrelate;
