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
        banner={banner}
        style={{
          background: `linear-gradient(0deg, rgba(56, 78, 77, 0.5), rgba(56, 78, 77, 0.5))`
        }}
      />
      <Questions />
      <IconLine className="m-auto mb-[125px] max-w-[80%]" />
      <FormCustom/>
    </>
  );
};

const Questions = () => {
  const { Panel } = Collapse;
  const text = (
    <p
      style={{
        paddingLeft: 24
      }}>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  return (
    <Container style={{ minHeight: "0" }}>
      <div className="max-w-[980px] mx-auto">
        <h1 className="m-0 max-w-none">Câu hỏi thường gặp</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={() => <IconPlus />}
          expandIconPosition="end"
          className="bg-primaryBg ">
          <Panel
            header="I do not know how to spell a lot of things."
            className="pb-[12px] mt-[45px]"
            key="1">
            {text}
          </Panel>
          <Panel
            header="I do not know how to spell a lot of things."
            className="pb-[12px] mt-[45px] text-textCl"
            key="2">
            {text}
          </Panel>
          <Panel
            header="I do not know how to spell a lot of things."
            className="pb-[12px] mt-[45px]"
            key="3">
            {text}
          </Panel>
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

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <div className="max-w-[80%] m-auto">
      <h1 className="text-left max-w-[100%]">Gửi tin nhắn</h1>
      <p className="text-txt2 text-left my-[35px]">Trong trường hợp bạn không thấy câu hỏi mong muốn, hãy gửi tin nhắn cho chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất. </p>
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
          <Input className=" bg-primaryBg rounded-[10px] py-[10px]"/>
        </Form.Item>
        <Form.Item
          className="inline-block w-[48%] ml-[3%]"
          name={["user", "email"]}
          label={<p className="whitespace-nowrap">Địa chỉ email</p>}
          rules={[{ type: "email" }]}>
          <Input className=" bg-primaryBg rounded-[10px] py-[10px]"/>
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label={<p className="whitespace-nowrap">Nội dung liên hệ</p>} className="w-full">
          <Input.TextArea className=" bg-primaryBg rounded-[10px] w-full " rows={10}/>
        </Form.Item>
        <Form.Item >
          <button htmlType="submit">Gửi tin nhắn</button>
        </Form.Item>
      </Form>
      </div>

    </Container>
  );
};

export default ContactPage;
