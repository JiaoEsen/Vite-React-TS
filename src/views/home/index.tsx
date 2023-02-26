import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Page1", "/page1", <PieChartOutlined />),
  getItem("Page2", "/page2", <DesktopOutlined />),
  getItem("Page3", "/page3", <UserOutlined />),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigateTo = useNavigate();

  const menuClick = (evt: { key: string }) => {
    console.log(evt);
    navigateTo(evt.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            lineHeight: '32px',
            margin: 16,
            color: '#fff',
            textAlign: 'center',
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >JiaoYsen</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["0"]}
          mode="inline"
          items={items}
          onClick={menuClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: "16px 16px" }}>
          <Outlet />
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
