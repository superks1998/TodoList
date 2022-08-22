import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import routers from "../../routers";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        {routers.map((menu) =>
                            menu.children ? (
                                <SubMenu
                                    key={menu.key}
                                    icon={<UserOutlined />}
                                    title={menu.name}
                                >
                                    {menu.children.map(
                                        (subMenu) =>
                                            !subMenu.hidden && (
                                                <Menu.Item key={subMenu.key}>
                                                    <Link to={subMenu.path}>
                                                        {subMenu.name}
                                                    </Link>
                                                </Menu.Item>
                                            )
                                    )}
                                </SubMenu>
                            ) : (
                                <Menu.Item
                                    key={menu.key}
                                    icon={<PieChartOutlined />}
                                >
                                    <Link to={menu.path}>{menu.name}</Link>
                                </Menu.Item>
                            )
                        )}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: "0 16px" }}>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Switch>
                                {routers.map((menu) =>
                                    menu.children ? (
                                        menu.children.map((subMenu) => (
                                            <Route
                                                key={subMenu.path}
                                                path={subMenu.path}
                                            >
                                                {subMenu.component}
                                            </Route>
                                        ))
                                    ) : (
                                        <Route key={menu.path} path={menu.path}>
                                            {menu.component}
                                        </Route>
                                    )
                                )}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2021 Created by Tee
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout;
