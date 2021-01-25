import React from "react";
import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 33,
    helpdesk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    helpdesk: 4,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 35,
    helpdesk: 5,
    agent: "Carlos Castro",
  },
  {
    ticketNo: 36,
    helpdesk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    helpdesk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    helpdesk: 2,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 39,
    helpdesk: 5,
    agent: "Carlos Castro",
  },
];

export const Queue = () => {
  useHideMenu(true);
  
  return (
    <>
      <Title level={1}>Customer Support</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16, backgroundColor: 'rgb(230, 242, 255)' }}
                  actions={[
                    <Tag color="volcano"> {item.agent} </Tag>,
                    <Tag color="magenta"> HelpDesk: {item.helpdesk} </Tag>,
                  ]}
                >
                  <Title> No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider> Historial </Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">On the desk: </Text>
                      <Tag color="magenta"> {item.ticketNo} </Tag>
                      <Text type="secondary"> Agent: </Text>
                      <Tag color="volcano"> {item.agent} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
