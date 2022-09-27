import React from "react";
import Banner from "../components/banner/Banner";
import banner from "../assets/images/contact-banner.png";
import Container from "../components/Container/Container";
import { ReactComponent as IconPlus } from "../assets/icon/plus.svg";
import { ReactComponent as IconLine } from "../assets/icon/line.svg";

import { Collapse, Form, Input } from "antd";
const ContactPage = () => {
  return (
    <>
      <Banner
        className={"min-h-[680px]"}
        banner={banner}
        backgroundCover
       >
        <div className="flex flex-col items-center justify-start fluid w-full h-full md:gap-[50px] gap-[20px] md:pb-[40px] pb-[10px]">
          <h1 className="my-0">Liên hệ Trúc Chỉ</h1>
          <div className="max-w-[832px] w-[80%] mx-auto grid md:gap-[50px] gap-2">
            <div className="flex flex-col justify-between md:flex-row ">
              <div>
                <span className="text-textCl">Thời gian hoạt động</span>
                <p className="text-left text-txt2">7h30 - 17h00</p>
              </div>
              <div>
                <span className="text-textCl">Số điện thoại liên hệ</span>
                <p className="text-left text-txt2">0962 901 518</p>
              </div>
            </div>
            <div>
              <span className="text-textCl">Văn phòng đại diện</span>
              <p className="text-left text-txt2">
                Trúc Chỉ km 1000 - 2/3A Nguyễn Thị Minh Khai, P. ĐaKao, Q. 1,
                TP. HCM
              </p>
            </div>
          </div>
        </div>
      </Banner>
      <Questions />
      <IconLine className="m-auto mb-[125px] max-w-[80%]" />
      <FormCustom />
    </>
  );
};

const Questions = () => {
  const { Panel } = Collapse;

  const questions = [
    {
      header: "I do not know how to spell a lot of things.",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
      header: "I do not know how to spell a lot of things.",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
      header: "I do not know how to spell a lot of things.",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];
  
  return (
    <Container style={{ minHeight: "0" }}>
      <div className="max-w-[980px] mx-auto">
        <h1 className="m-0 max-w-none">Câu hỏi thường gặp</h1>
        <Collapse
          bordered={false}
          expandIcon={() => <IconPlus />}
          expandIconPosition="end"
          className="bg-primaryBg ">
          {questions.map((question,idx) => (
            <Panel
              header={<span className=" text-textCl mr-[10px] block">{question.header}</span>}
              className="pb-[12px] mt-[45px]"
              key={idx}>
              <p
                className="text-left text-txt2"
                style={{
                  paddingLeft: 10
                }}>
                  {question.text}
                </p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </Container>
  );
};

const FormCustom = () => {
  const layout = {
    // labelCol: { span: 3 },
    // wrapperCol: { span: 21 }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };

  const onFinish = values => {
    console.log(values);
  };

  return (
    <Container>
      <div className="max-w-[80%] m-auto">
        <h1 className="text-left max-w-[100%]">Gửi tin nhắn</h1>
        <p className="text-txt2 text-left my-[35px]">
          Trong trường hợp bạn không thấy câu hỏi mong muốn, hãy gửi tin nhắn
          cho chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.{" "}
        </p>
        <Form
          // {...layout}
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}>
          <Form.Item
            className="inline-block w-[48%] bg-opacity-0 "
            name={["user", "name"]}
            label={<p className="whitespace-nowrap">Tên của bạn</p>}
            rules={[{ required: true }]}>
            <Input className=" bg-primaryBg rounded-[10px] py-[10px]" size="large"/>
          </Form.Item>
          <Form.Item
            className="inline-block w-[48%] ml-[3%]"
            name={["user", "email"]}
            label={<p className="whitespace-nowrap">Địa chỉ email</p>}
            rules={[{ type: "email" }]}>
            <Input className=" bg-primaryBg rounded-[10px] py-[10px]" size="large"/>
          </Form.Item>
          <Form.Item
            name={["user", "introduction"]}
            label={<p className="whitespace-nowrap">Nội dung liên hệ</p>}
            className="w-full">
            <Input.TextArea
              className=" bg-primaryBg rounded-[10px] w-full "
              rows={10}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <button htmlType="submit" className="mx-auto md:ml-0">Gửi tin nhắn</button>
          </Form.Item>
        </Form>
      </div>
    </Container>
  );
};

export default ContactPage;
