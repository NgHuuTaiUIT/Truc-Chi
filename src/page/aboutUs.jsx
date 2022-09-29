import React from "react";
import banner from "../assets/images/about-banner.png";
import Container from "../components/Container/Container";
import { ReactComponent as IconLine } from "../assets/icon/line.svg";
import historyImg from "../assets/images/history.png";
import { useHistory } from "react-router-dom";

const Banner = () => {
  return (
    <Container className='md:min-h-[1024px] min-h-[500px]'>
      <img
        src={banner}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
        style={{
          background: `linear-gradient(360deg, #384E4D 0%, rgba(56, 78, 77, 0) 100%)`
        }}
      />
    </Container>
  );
};

const Introduce = () => {
  return (
    <Container className="mt-[-400px] min-h-0">
      <div className="max-w-[80%] m-auto">
        <h1 className="w-full m-0 my-[95px] ml-auto text-center lg:text-right">
          Khái niệm Trúc Chỉ
        </h1>
        <div className="flex gap-[20px] flex-col md:flex-row">
          <h4 className="flex-1 text-left">
            Trúc Chỉ là tên gọi văn hoa của một loại Giấy - nghệ - thuật, Nghệ -
            thuật - giấy mới của Việt Nam dựa trên cơ sở nghề giấy truyền thống;
            với hàm ý Tre trúc là biểu tượng của Văn hóa và tinh thần Việt.
          </h4>
          <h4 className="flex-1 text-left">
            Trúc Chỉ là kết quả của công trình khoa học do Họa sĩ Phan Hải Bằng
            cùng các cộng sự nghiên cứu và phát triển từ năm 2000 đến nay.
          </h4>
        </div>
      </div>
      <IconLine className="mt-[125px] m-auto max-w-[80%]" />
    </Container>
  );
};

const History = () => {
  const history = useHistory();
  return (
    <Container className="min-h-0">
      <div className="max-w-[80%] m-auto flex flex-col lg:flex-row gap-4 md:gap-0" >
        <h2 className="flex-1 m-0 ml-auto text-center cursor-pointer md:w-full md:text-left" onClick={() => history.push('/about-sub')}>
          Lịch sử hình thành và phát triển Trúc Chỉ
        </h2>
        <img src={historyImg} alt="" className="max-h-[455px] w-[100%] lg:w-[50%]" />
      </div>
    </Container>
  );
};

const CircleInfo = () => {
  return (
    <Container className="min-h-0">
      <div className="max-w-[80%] m-auto flex gap-[38px] flex-wrap justify-center">
        <img src='https://picsum.photos/500' alt="" className="circle rounded-full max-h-[466px] max-w-[466px] w-full h-full bg-txt1"/>
        <div className="flex items-center justify-center flex-1 min-w-[50%]">
          <h4 className="text-center lg:text-right text-[24px] lg:text-[32px]">
            Trong khoảng thời gian sau Đổi mới, giới họa sĩ đồ họa Việt Nam luôn
            thiếu thốn giấy đặc chủng để hoàn thiện tác phẩm từ các kỹ thuật
            chất liệu in ấn, ngoài loại giấy có tên thường gọi là “xốp Đức” và
            một số loại giấy thông thường khác. Mặt khác, các họa sĩ cũng khát
            khao tìm kiếm những biểu hiện khác nữa của giấy - nền cho các bản
            in.
          </h4>
        </div>
      </div>
    </Container>
  );
};

const News = () => {
  const data = [
    {
      imgSrc: 'https://picsum.photos/501',
      title: "Năm 2000",
      content:
        "Họa sĩ Đồ họa Phan Hải Bằng (giảng viên Đại học Nghệ thuật, Đại học Huế) đã cùng các cộng sự liên tục thử nghiệm, tìm tòi cách tạo nên loại giấy đặc chủng cho các kỹ thuật chất liệu in ấn."
    },
    {
      imgSrc: 'https://picsum.photos/502',
      title: "Tháng 04/2012",
      content:
        "Nghệ - thuật Giấy, Giấy - nghệ - thuật mới này được Nhà văn, Dịch giả Bửu Ý lập danh là “Trúc Chỉ” với ý nghĩa hình tượng cây tre/trúc là biểu tượng văn hóa và tinh thần Việt."
    },
    {
      imgSrc: 'https://picsum.photos/503',
      title: "Tháng 09/2013",
      content: "Công ty TNHH Nghệ thuật Trúc Chỉ Việt Nam chính thức thành lập."
    }
  ];
  return (
    <Container className="min-h-0">
        {data.map((item,idx) => (
          <div className="flex max-w-[80%] m-auto mb-[35px] lg:mb-[72px] flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <img
                src={item.imgSrc}
                alt=""
                className="object-cover max-h-[521px] max-w-[549px] min-w-[300px] w-full bg-txt1 m-auto"
              />
            </div>
            <div className="flex flex-col gap-[10px] lg:gap-[45px] flex-1">
              <h2>{item.title}</h2>
              <h4 className="text-center md:text-left">{item.content}</h4>
            </div>
          </div>
        ))}
        <button className="m-auto">Đọc tiếp</button>
    </Container>
  );
};

const AboutUs = () => {
  return (
    <>
      <Banner />
      <Introduce />
      <History />
      <CircleInfo />
      <News />
    </>
  );
};

export default AboutUs;
