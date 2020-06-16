/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 19:33:47
 * @LastEditors: your name
 * @LastEditTime: 2020-06-16 17:35:33
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
    const [ menuTree, setMenuTree ] = useState([])     //多级菜单数组

    const onCollapse = collapsed => {   //设置做菜单栏是否收拢
        setCollapsed( collapsed );
    };
    const menuClick = item => {        //点击菜单
        props.history.push(item.key)
    };
    const renderMenu = (data)=>{          //根据路由生成多级菜单树
        return data.map((item)=>{
            if(item.children&&item.children.length>0){
                return (
                    <SubMenu key={item.pathname}  title={item.title} icon={<item.icon />}>
                        { renderMenu(item.children) } 
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.pathname} icon={<item.icon />}>
                        {item.title}
                    </Menu.Item>
                )
            }
        })
    };
    let opneKey = ''                        //要展开菜单key
    let currentPosition = '工作台'          //当前位置
    let path = props.location.pathname;
    const calcCurrentKey = (data)=>{
        data.map((item)=>{
            if(item.children&&item.children.length>0){
                item.children.map(cItem => {
                    if(cItem.pathname === path){
                        opneKey = item.pathname
                        currentPosition = `${item.title} / ${cItem.title}` 
                        window.document.title = cItem.title
                    }
                })
                
            }else{
                if(item.pathname === path){
                    currentPosition = item.title
                    window.document.title = item.title
                }
            }  
        })
    }
    calcCurrentKey(props.nav)           //计算当前要打开菜单的key
    
    useEffect(()=>{                        //生命周期 componentWillMount
        const  menuTree = renderMenu(props.nav)      //菜单树

        setMenuTree(menuTree)     //修改菜单树
    },[])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">LOGO</div>

                <Menu theme="dark" selectedKeys={[path]} defaultOpenKeys={[opneKey]} mode="inline" onClick={menuClick}>
                    {
                        menuTree.map((item)=>{
                            return item
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