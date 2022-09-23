import { Card } from 'antd';
import React from 'react';
import Carousel from '../Carousel';
import Container from '../Container/Container';

const News = () => {
    const data = [
        {
            imgSrc:"./assets/images/news-1.png",
            content:"Người khai sinh nghệ thuật Trúc chỉ Việt Nam"
        },
        {
            imgSrc:"./assets/images/news-2.png",
            content:"Độc đáo nghệ thuật Trúc chỉ Việt Nam"
        },
    ]

    const setting = {
        slidesToShow: 1,
        responsive:[],
        arrows:true
    }
    return (
        <Container>
        <div className="max-w-[90%] m-auto">
          <h1>Nghệ thuật Trúc Chỉ</h1>
          <p className="px-[35px] py-[20px] md:py-[40px]">Trúc Chỉ là Nghệ - thuật - giấy, Giấy – nghệ - thuật của Việt Nam, một Giá trị Việt mới có điểm khởi đầu và quê hương tại Cố đô Huế.</p>
          <Carousel setting={setting}>
            {data.map((item, idx) => (
              <div key={idx} className="px-[35px]">
                <Card
                  className="border-0 max-h-[875px] bg-primaryBg w-full max-w-[1024px] m-auto "
                  hoverable
                  cover={
                    <img
                      className='min-h-[300px]'
                      alt="example"
                      src={item.imgSrc}
                    />
                  }>
                    <p className='justify-center'>{item.content}</p>
                    <button className="m-auto my-[20px] md:my-[40px]">Xem thêm</button>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    );
}

export default News;
