import React from "react";
import banner from "../assets/images/about-banner.png";
import Container from "../components/Container/Container";
import { ReactComponent as IconLine } from "../assets/icon/line.svg";
import historyImg from "../assets/images/history.png";

const Banner = () => {
  return (
    <Container className="md:min-h-[1024px] min-h-[500px]">
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
    <Container className="min-h-0 mb-[65px] lg:mb-[127px]">
      <div className="max-w-[80%] m-auto flex flex-col gap-[72px]">
        <h1 className="w-full mx-auto text-center">
          Lịch sử hình thành và phát triển Trúc Chỉ
        </h1>
        <h4 className="text-left">
          Trong khoảng thời gian sau Đổi mới, giới họa sĩ đồ họa Việt Nam luôn
          thiếu thốn giấy đặc chủng để hoàn thiện tác phẩm từ các kỹ thuật chất
          liệu in ấn, ngoài loại giấy có tên thường gọi là “xốp Đức” và một số
          loại giấy thông thường khác. Mặt khác, các họa sĩ cũng khát khao tìm
          kiếm những biểu hiện khác nữa của giấy - nền cho các bản in.
        </h4>
        <h4 className="text-left">
          Trong khoảng thời gian sau Đổi mới, giới họa sĩ đồ họa Việt Nam luôn
          thiếu thốn giấy đặc chủng để hoàn thiện tác phẩm từ các kỹ thuật chất
          liệu in ấn, ngoài loại giấy có tên thường gọi là “xốp Đức” và một số
          loại giấy thông thường khác. Mặt khác, các họa sĩ cũng khát khao tìm
          kiếm những biểu hiện khác nữa của giấy - nền cho các bản in.
        </h4>
        <h4 className="text-left">
          <img
            src="https://picsum.photos/seed/picsum/466/466"
            alt=""
            className="float-right px-[20px] py-[10px] sm:max-w-[50%] min-w-[300px] max-w-full"
          />
          Do đó từ năm 2000, Họa sĩ Đồ họa Phan Hải Bằng (giảng viên Đại học
          Nghệ thuật, Đại học Huế) đã cùng các cộng sự liên tục thử nghiệm, tìm
          tòi cách tạo nên loại giấy đặc chủng cho các kỹ thuật chất liệu in ấn.
          Sau hơn 10 năm trăn trở, một loại hình Giấy - nghệ - thuật, Nghệ -
          thuật - giấy mới của Việt Nam dựa trên cơ sở nghề giấy truyền thống đã
          ra đời.
        </h4>
        <h4 className="text-left">
          Nghệ - thuật Giấy, Giấy - nghệ - thuật này được hình thành từ ý niệm
          cốt lõi: “Mang lại cho Giấy thêm khả năng, ‘thoát’ khỏi thân phận làm
          ‘nền’ để trở thành tác phẩm tự thân, độc lập”.
        </h4>
        <h4 className="text-right">
          <img
            src="https://picsum.photos/466/466"
            alt=""
            className="float-left px-[20px] py-[10px] sm:max-w-[50%] min-w-[300px] max-w-full "
          />
          Do đó từ năm 2000, Họa sĩ Đồ họa Phan Hải Bằng (giảng viên Đại học
          Nghệ thuật, Đại học Huế) đã cùng các cộng sự liên tục thử nghiệm, tìm
          tòi cách tạo nên loại giấy đặc chủng cho các kỹ thuật chất liệu in ấn.
          Sau hơn 10 năm trăn trở, một loại hình Giấy - nghệ - thuật, Nghệ -
          thuật - giấy mới của Việt Nam dựa trên cơ sở nghề giấy truyền thống đã
          ra đời.
        </h4>
        <h4 className="text-left">
          Từ nền tảng này, Họa sĩ Phan Hải Bằng thực hiện tiếp đề tài NCKH cấp
          Cơ sở/ ĐH Huế: “Nghiên cứu chế tạo giấy từ các nguyên liệu địa phương,
          ứng dụng vào giảng dạy, học tập và sáng tạo Nghệ thuật”- Mã số:
          ĐHH-2013-05-08.
        </h4>
        <img
          src="https://picsum.photos/1200"
          alt=""
          className="w-full max-w-full max-h-[466px]"
        />
        <h4 className="text-left">
          Tháng 09/2013, Công ty TNHH Nghệ thuật Trúc Chỉ Việt Nam chính thức
          thành lập. Đồng thời, kể từ năm 2013 trở đi, dưới sự quản lý, điều
          hành của Họa sĩ Ngô Đình Bảo Vi (tốt nghiệp Đồ họa Thiết kế ĐH Mỹ
          thuật TP. HCM), Trúc Chỉ bắt đầu tập trung hơn vào mảng Nghệ thuật ứng
          dụng. Hệ thống thuật ngữ kỹ thuật “Đồ họa Trúc chỉ/Truc chi Graphy”
          cũng trở thành một hệ thống thuật ngữ kỹ thuật đồ hoạ mới của Việt Nam
          trên thế giới, do Trúc Chỉ sáng tạo nên, đang được Trúc Chỉ ứng dụng
          trong sáng tạo, liên tục nghiên cứu để ngày càng hoàn thiện hơn.
        </h4>
        <h4 className="text-left">
          Chia sẻ về tâm huyết dành cho Nghệ thuật Trúc Chỉ Việt Nam, Nhà sáng
          lập - Họa sĩ Phan Hải Bằng cho hay: “Giấy là nghệ thuật, nghề giấy
          cũng là một nghệ thuật. Trúc Chỉ là tinh thần hợp tác để cùng nhau xây
          dựng những giá trị mới bằng cách khai thác năng lượng của truyền
          thống, kết hợp với tư duy và tâm thức đương đại. Điều mong muốn nhất
          là Trúc Chỉ sẽ được đón nhận như một giá trị mới của Việt Nam, của
          Huế, như một phép cộng thêm vào vốn văn hóa Việt và cả trong đời sống,
          trở thành một khái niệm thân thuộc của văn hóa Việt. Nói một cách dân
          dã, tôi ước mơ ngày nào đó, khi nhắc đến Huế, bên cạnh những cơm hến,
          áo dài, tranh làng Sình, hoa giấy Thanh Tiên, người ta biết còn có
          Trúc Chỉ, nhắc đến Việt Nam, ngoài giấy Dó, giấy Điệp, còn có Trúc
          Chỉ”.{" "}
        </h4>
      </div>
    </Container>
  );
};

const History = () => {
  return (
    <Container className="min-h-0">
      <div className="max-w-[80%] m-auto flex flex-col lg:flex-row gap-4 md:gap-0">
        <h2 className="flex-1 m-0 ml-auto text-center md:w-full md:text-left">
          Lịch sử hình thành và phát triển Trúc Chỉ
        </h2>
        <img
          src={historyImg}
          alt=""
          className="max-h-[455px] w-[100%] lg:w-[50%]"
        />
      </div>
    </Container>
  );
};

const CircleInfo = () => {
  return (
    <Container className="min-h-0">
      <div className="max-w-[80%] m-auto flex gap-[38px] flex-wrap justify-center">
        <img
          src="https://picsum.photos/500"
          alt=""
          className="circle rounded-full max-h-[466px] max-w-[50%] w-full h-full bg-txt1"
        />
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
      imgSrc: "https://picsum.photos/501",
      title: "Năm 2000",
      content:
        "Họa sĩ Đồ họa Phan Hải Bằng (giảng viên Đại học Nghệ thuật, Đại học Huế) đã cùng các cộng sự liên tục thử nghiệm, tìm tòi cách tạo nên loại giấy đặc chủng cho các kỹ thuật chất liệu in ấn."
    },
    {
      imgSrc: "https://picsum.photos/502",
      title: "Tháng 04/2012",
      content:
        "Nghệ - thuật Giấy, Giấy - nghệ - thuật mới này được Nhà văn, Dịch giả Bửu Ý lập danh là “Trúc Chỉ” với ý nghĩa hình tượng cây tre/trúc là biểu tượng văn hóa và tinh thần Việt."
    },
    {
      imgSrc: "https://picsum.photos/503",
      title: "Tháng 09/2013",
      content: "Công ty TNHH Nghệ thuật Trúc Chỉ Việt Nam chính thức thành lập."
    }
  ];
  return (
    <Container className="min-h-0">
      {data.map((item, idx) => (
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

const AboutUsSub = () => {
  return (
    <>
      <Banner />
      <Introduce />
    </>
  );
};

export default AboutUsSub;
