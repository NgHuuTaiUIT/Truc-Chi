import React from "react";
import Container from "../Container/Container";
import imgDefinition from "../../assets/images/definition.png";
const Definition = () => {
  return (
    <Container background={imgDefinition}>
      <img
        src={imgDefinition}
        alt=""
        className="absolute inset-0 z-[0] w-full h-full"
      />
      <div className="flex justify-between flex-1 relative z-[1] h-[100vh] items-center md:p-[75px] p-[35px]">
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <h2 className="py-[70px]">Sứ mệnh</h2>
          <p>
            {`“Mang lại cho Giấy thêm khả năng, ‘thoát’ khỏi thân \nphận làm ‘nền’ để trở thành tác phẩm tự thân, \nđộc lập”.`}
          </p>
          <button className="m-auto my-[65px]">Xem thêm</button>
        </div>
      </div>
    </Container>
  );
};

export default Definition;
