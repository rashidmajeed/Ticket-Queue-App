import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { Agent } from './Agent';
import { Queue } from './Queue';
import { CreateTicket } from './CreateTicket';
import { HelpDesk } from './HelpDesk';
import { UiContext } from '../context/UiContext';


const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { closeMenu } = useContext( UiContext )

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider 
        collapseWidth="0"
        breakpoint="md"
        hidden={closeMenu}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/agent">Agent</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              <Link to="/queue">Queue</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PlusOutlined />}>
              <Link to="/create">Create Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
          <Switch>
            <Route path="/agent" component={Agent} />
            <Route path="/queue" component={Queue} />
            <Route path="/create" component={CreateTicket} />
            <Route path="/helpdesk" component={HelpDesk} />
            <Redirect to="/agent" />
          </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
