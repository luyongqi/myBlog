/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 19:33:47
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-06-12 21:17:14
 * @Description: 首页
 */ 

import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './index.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function LayoutIndex(props){
    const [collapsed,setCollapsed] = useState(false)   //是否折叠
    const [currentPosition,setPosition] = useState('工作台')


    const onCollapse = collapsed => {
        setCollapsed( collapsed );
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">LOGO</div>

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to='/admin/home'>工作台</Link>  
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理">
                        <Menu.Item key="4"> 
                            <Link to='/admin/article/add'>添加文章</Link>
                        </Menu.Item>
                        <Menu.Item key="5">文章列表</Menu.Item>
                        <Menu.Item key="6">分类管理</Menu.Item>
                        <Menu.Item key="7">标签管理</Menu.Item>
                        <Menu.Item key="8">评论管理</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="11" icon={<FileOutlined />} >
                        轮播广告
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<UserOutlined />} title="相册管理">
                        <Menu.Item key="17">相册分类</Menu.Item>
                        <Menu.Item key="18">相册上传</Menu.Item>
                        <Menu.Item key="19">相册查看</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<FileOutlined />} >
                        个人资料    
                    </Menu.Item>
                    <Menu.Item key="9" icon={<DesktopOutlined />}>
                        账号管理
                    </Menu.Item>
                    <Menu.Item key="10" icon={<FileOutlined />} >
                        留言管理
                    </Menu.Item>
                    <Menu.Item key="12" icon={<FileOutlined />} >
                        日志管理
                    </Menu.Item>
                    <Menu.Item key="13" icon={<DesktopOutlined />}>
                        友情链接
                    </Menu.Item>
                    <SubMenu key="sub3" icon={<UserOutlined />} title="系统管理">
                        <Menu.Item key="14">用户管理</Menu.Item>
                        <Menu.Item key="15">角色管理</Menu.Item>
                        <Menu.Item key="16">菜单管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

            <Layout className="site-layout">
                {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}

                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                    <Breadcrumb.Item>{currentPosition}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </Layout>
    );
}



export default LayoutIndex