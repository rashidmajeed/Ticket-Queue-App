import React from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

export const RouterPage = () => {
    return (
        <Layout>
        <Sider style={{height:'100vh'}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Agent
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              Queue
            </Menu.Item>
            <Menu.Item key="3" icon={<PlusOutlined />}>
              Create Ticket
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
}
