import React from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const HelpDesk = () => {
  useHideMenu(false);

  const clear = () => {
    console.log("clear");
  };
  const nextTicket = () => {
    console.log('nextTicket');
}

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Rashid Majeed</Title>
          <Text>You are working at the desk: </Text>
          <Text type="success">5</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={clear}>
            <CloseCircleOutlined />
            Clear
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col>
          <Text>You are attending the ticket number: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Following
          </Button>
        </Col>
      </Row>
    </>
  );
};
