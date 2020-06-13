/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 19:33:47
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 17:15:21
 * @Description: 首页
 */ 

import React, {useState, useEffect} from 'react';
import { withRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function LayoutIndex(props){
    const [collapsed,setCollapsed] = useState(false)   //是否折叠
    const [currentPosition,setPosition] = useState('工作台')

    const onCollapse = collapsed => {   //设置做菜单栏是否收拢
        setCollapsed( collapsed );
    };
    const menuClick = item => {        //点击菜单
        props.history.push(item.key)
    };
    useEffect(()=>{
      
    },[])
    return (
        <Layout style={{ minHeight: '100vh' }}>
            
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">LOGO</div>

                <Menu theme="dark" defaultSelectedKeys={[props.location.pathname]}  mode="inline" onClick={menuClick}>
                    {
                        props.nav.map( item => {
                            if (item.children && item.children.length > 0) {
                                let cHtml = <div></div>
                                cHtml = item.children.map( p => {
                                    return (
                                        <Menu.Item key={p.pathname} icon={<p.icon />}>
                                            {p.title}  
                                        </Menu.Item>
                                    )
                                })
                                return (
                                    <SubMenu key={item.pathname} title={item.title} icon={<item.icon />}>
                                        {cHtml}
                                    </SubMenu>
                                )
                              } else {
                                return (
                                    <Menu.Item key={item.pathname} icon={<item.icon />}>
                                        {item.title}
                                    </Menu.Item>
                                )
                              }
                            
                        })
                    }
                   
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



export default withRouter(LayoutIndex)