import React, { useState } from "react";
import Container from "../Container/Container";
import { ReactComponent as IconChevronLeft } from "../../assets/icon/chevron-left.svg";
import { ReactComponent as IconChevronRight } from "../../assets/icon/chevron-right.svg";
import { ReactComponent as IconLine } from "../../assets/icon/line.svg";

const Journeys = () => {
  const data = [
    {
      title: "Năm 2000: Những tấm handmade đầu tiên ra đời",
      content:
        "`Họa sĩ Phan Hải Bằng đã tìm tòi, thử nnghiệm để cho ra đời những tấm handmade đầu tiên, được sử dụng để in tranh với các thể loại kỹ thuật chất liệu: in gỗ, đá, kẽm…`",
      imgSrc: "./assets/images/journey-0.png"
    },
    {
      title: "Năm 2007: Nghiên cứu giấy thủ công ở Thái Lan ",
      content:
        "Họa sĩ Phan Hải Bằng nhận được học bổng Châu Á Học (Asian Scholarship Foundation- ASF) và có cơ hội tiếp tục nghiên cứu về giấy thủ công với chuyến điền dã ở Bắc Thái Lan."
      ,imgSrc: "./assets/images/journey-1.png"
    },
    {
      title: "Năm 2008: Nhen nhóm các định hướng cốt lõi",
      content:"Chuyến điền dã vào cuối tháng 6, đầu tháng 7/2008 ở Bắc Ninh, đặc biệt ở làng giấy Dó Đống Cao, đã nhen nhóm các định hướng cốt lõi của Trúc Chỉ."
      ,imgSrc: "./assets/images/journey-2.png"
    },
    {
      title: "Năm 2011: Tạo dựng xưởng thực nghiệm đầu tiên",
      content:"PHB Studio - xưởng thực nghiệm đầu tiên của Trúc Chỉ ra đời trong Đại học Nghệ thuật - Đại học Huế vào tháng 3/2011. Sáu tháng sau đó, Trúc Chỉ tham gia Trại sáng tác Đồ họa Huế lần 1 và nhận được giải Tác phẩm xuất sắc thường niên của Hội Mỹ thuật Thừa Thiên Huế 2011."
      ,imgSrc: "./assets/images/journey-3.png"
    },
    {
      title: `Năm 2012: “Trúc Chỉ” được khai sinh`,
      content:"Tháng 04/2012: Nhà văn, dịch giả Bửu Ý đặt tên cho Nghệ - thuật – Giấy, Giấy – nghệ - thuật mới này là Trúc Chỉ với hàm ý Tre trúc là biểu tượng của Văn hóa và tinh thần Việt."
      ,imgSrc: "./assets/images/journey-4.png"
    },
    {
      title: "Năm 2013: Thành lập Công ty TNHH Nghệ thuật Trúc Chỉ Việt Nam",
      content:"Song song với việc thiết lập Vườn Trúc Chỉ tại số 4 Triệu Quang Phục (Thành phố Huế), Trúc Chỉ bước vào giai đoạn phát triển theo quan điểm “Trúc Chỉ - Phép cộng và sự Trở về”"
      ,imgSrc: "./assets/images/journey-5.png"
    },
    {
      title: "Năm 2014: Trúc Chỉ gặt hái nhiều thành tựu",
      content:"02 giải Khuyến khích Festival Mỹ thuật trẻ lần 3 (Hà Nội) trao cho Tác giả Trần Ánh Phi (bộ tác phẩm với hiệu ứng Giấy - đối- thoại); và Tác giả Ngô Đình Bảo Vi (tác phẩm sắp đặt Trúc Chỉ - Ánh sáng)."
      ,imgSrc: "./assets/images/journey-6.png"
    },
    {
      title: "Năm 2017: Trúc chỉ là tặng phẩm cho Nhật hoàng",
      content:"Trúc Chỉ vinh dự được lựa chọn là tặng phẩm cho Nhật hoàng trong chuyến viếng thăm cấp quốc gia của Nhật hoàng và Hoàng hậu tới Huế tháng 03/2017."
      ,imgSrc: "./assets/images/journey-7.png"
    },
    {
      title: "Năm 2018: Tác phẩm có mặt tại trụ sở Quốc hội",
      content:"Tác phẩm của Họa sĩ Phan Hải Bằng được lựa chọn trưng bày tại Không gian Bảo tàng Đương Đại Đường hầm Quốc hội"
      ,imgSrc: "./assets/images/journey-8.png"
    },
    {
      title: "Năm 2020: Tác phẩm Trúc Chỉ hiện diện ở Văn phòng Chính phủ.",
      content:""
      ,imgSrc: "./assets/images/journey-9.png"
    },
    {
      title: "Năm 2022: Nhận Giải thưởng  Sáng tạo Lê Bá Đảng",
      content:""
      ,imgSrc: "./assets/images/journey-10.png"
    }
  ];
  const [dataShow, setDataShow] = useState(0);
  const handleNextSlide = () => {
    setDataShow(data.length - 1 > dataShow ? dataShow + 1 : 0);
  };
  const handlePreSlide = () => {
    setDataShow(dataShow > 0 ? dataShow - 1 : data.length - 1);
  };
  return (
    <Container>
      <h1>Hành trình Trúc Chỉ</h1>
      <div className="max-w-[80%] flex justify-between flex-1 h-full m-auto gap-[10%] mt-[20px] md:mt-[40px] flex-wrap flex-col lg:flex-row">
        <div className="flex flex-col lg:justify-between flex-1 py-[10px] md:py-[30px]">
          <h3 className="text-center md:text-left">{data[dataShow].title}</h3>
          <p className="md:text-left text-txt2 my-[20px] md:my-[42px] text-ellipsis h-[100px]" >
            {data[dataShow].content}
          </p>
          <div className="flex gap-[30px] md:gap-[65px] justify-center items-center flex-col md:flex-row md:justify-between">
            <button>Xem thêm</button>
            <div className="flex justify-between gap-[50px]">
              <button
                className="flex justify-center items-center w-[71px] h-[71px] rounded-full border-white border-[2px] p-0"
                onClick={handlePreSlide}>
                <IconChevronLeft />
              </button>
              <button
                className="flex justify-center items-center w-[71px] h-[71px] rounded-full border-white border-[2px] p-0"
                onClick={handleNextSlide}>
                <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full py-[10px] md:py-[30px]">
          <img src={data[dataShow].imgSrc} alt="" className=" max-h-[623px] h-full object-cover min-w-[320px] m-auto w-full" />
        </div>
      </div>
      <IconLine className="mt-[65px] md:mt-[125px] m-auto max-w-[80%]" />
    </Container>
  );
};

export default Journeys;
