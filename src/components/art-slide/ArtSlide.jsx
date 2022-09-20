import { Card } from "antd";
import React from "react";
import Carousel from "../Carousel";
import Container from "../Container/Container";

const ArtSlide = () => {
  const data = [
    {
      imgSrc: "./assets/images/art-1.png",
      title: "Nghệ thuật tạo hình"
    },
    {
      imgSrc: "./assets/images/art-2.png",
      title: "Nghệ thuật ứng dụng "
    },
    {
      imgSrc: "./assets/images/art-1.png",
      title: "Nghệ thuật ứng dụng "
    },
    {
      imgSrc: "./assets/images/art-2.png",
      title: "Nghệ thuật ứng dụng "
    }
  ];

  const setting = {
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
          slidesToShow: 1
        }
      },
    ]
  };
  return (
    <Container className="min-h-[0]">
      <div className="max-w-[90%] m-auto">
        <h1>Nghệ thuật Trúc Chỉ</h1>
        <p className="px-[35px] py-[40px]">
          Trúc Chỉ là Nghệ - thuật - giấy, Giấy – nghệ - thuật của Việt Nam, một
          Giá trị Việt mới có điểm khởi đầu và <br />
          quê hương tại Cố đô Huế.
        </p>
        <Carousel setting={setting}>
          {data.map((item, idx) => (
            <div key={idx} className="md:px-[35px] px-[10px]">
              <Card
                className="border-0"
                hoverable
                style={{
                  height: "auto",
                  background: "#384E4D",
                  width: "100%",
                  maxWidth: "588px",
                  margin: "auto"
                }}
                cover={<img alt="example" src={item.imgSrc}/>}>
                <div className="relative">
                  <h2 className="absolute bottom-[150px] w-full">
                    {item.title}
                  </h2>
                  <button className="m-auto my-[40px]">Xem thêm</button>
                </div>
                {/* <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                /> */}
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default ArtSlide;
