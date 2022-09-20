import React from "react";
import Container from "../components/Container/Container";
import newsBanner from "../assets/images/news-banner.png";
import { ReactComponent as IconLine } from "../assets/icon/line.svg";
import { ReactComponent as IconArrow } from "../assets/icon/arrow.svg";

const Banner = () => {
  return (
    <div className="mb-[90px] fluid">
      <h1>Tin tức</h1>
      <div className="relative max-w-[80%] m-auto">
        <img
          src={newsBanner}
          alt=""
          className="object-cover max-w-[1196px] h-[521px] mt-[60px] m-auto w-[100%]"
          style={{
            filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
            background: `linear-gradient(360deg, #384E4D 0%, rgba(56, 78, 77, 0) 100%)`
          }}
        />
        <div className="absolute bottom-[20px] left-[50%] translate-x-[-50%] w-[80%]">
          <span className="text-[25px] font-medium text-txt2">Huế</span>
          <span className="text-[23px] font-normal text-txt2 pl-[30px]">
            Jun 28
          </span>
          <h2 className="text-[35px] leading-[75px] text-left">
            What do you want to do when you grow up?
          </h2>
        </div>
      </div>
    </div>
  );
};

const Posts = () => {
  const data = [
    {
      imgSrc: "./assets/images/post-1.png",
      content: "What do you want to do when you grow up?"
    },
    {
      imgSrc: "./assets/images/post-2.png",
      content: "She usually has to give in to her big sister."
    },
    {
      imgSrc: "./assets/images/post-3.png",
      content: "Hold on I need at least a few minutes!"
    }
  ];
  return (
    <Container className="min-h-0">
      <div className="max-w-[80%] m-auto">
        <div className="grid gap-[40px] grid-cols-1 md:grid-cols-3">
          {data.map(post => (
            <div className="flex-1">
              <img src={post.imgSrc} alt="" className="h-[205px] w-full" />
              <p className="mt-[20px] text-left text-txt1">{post.content}</p>
            </div>
          ))}
        </div>
        <IconArrow className="ml-auto mt-[52px] cursor-pointer" />
      </div>
    </Container>
  );
};

const Instagram = () => {
  const data = [
    "./assets/images/insta-1.png",
    "./assets/images/insta-2.png",
    "./assets/images/insta-3.png",
    "./assets/images/insta-4.png",
    "./assets/images/insta-5.png",
    "./assets/images/insta-6.png",
    "./assets/images/insta-7.png",
    "./assets/images/insta-8.png",
    "./assets/images/insta-9.png",
    "./assets/images/insta-10.png",
  ]
  return (
    <Container className="max-w-[80%] m-auto min-h-0">
        <h1 className="mb-[125px]">Instagram</h1>
        <div className="grid lg:grid-cols-5 grid-cols-2">
          {data.map(img => <img src={img} alt="" className="w-full h-full px-[10px] py-[20px]" />)}
        </div>
    </Container>
  )
}

const NewsPage = () => {
  return (
    <>
      <Banner />
      <Posts />
      <IconLine className="m-auto mb-[125px] max-w-[80%]"/>
      <Instagram/>
    </>
  );
};

export default NewsPage;
