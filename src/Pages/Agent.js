import React from "react";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { Redirect, useHistory } from "react-router-dom";
import { SaveOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};

export const Agent = () => {
  const history = useHistory();
  useHideMenu(false);

  const onFinish = (agent) => {
    history.push("/helpdesk");
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <>
      <Title level={2}>Agent</Title>
      <Text style={{ marginTop: 100 }}>Enter your name and desk number</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Number of agents"
          name="agent"
          rules={[{ required: true, message: "Please input your agent!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="HelpDesk"
          name="helpdesk"
          rules={[{ required: true, message: "Enter the desk number" }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
