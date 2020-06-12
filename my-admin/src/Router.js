/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 20:20:16
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-06-12 21:19:05
 * @Description: file content
 */ 

 import React, { Component, useEffect } from 'react';
 import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

 import LayoutIndex from './components/Layout'     //页面布局
 import Login from './Pages/login'       //登录
 import Workbench from './Pages/workbench'  //工作台
 import AddArticle from './Pages/article/AddArticle'   //添加文章
 import NotFound from './Pages/notFound' 

function RouterDom(props){
    return (
        <Router>
            <Switch>
                <Route path="/" exact  component={Login}/> 
                <Route path="/login"  component={Login}/> 
                <Route  path="/404" component={NotFound}/>
                
                <LayoutIndex>
                    <Switch>
                        <Route path="/admin/home/" exact component={ Workbench }/>
                        <Route path="/admin/article/add/" component={ AddArticle } />
                        <Redirect to="/404"/>
                    </Switch>
                </LayoutIndex>   
            </Switch>
        </Router>
    )
}

function requireAuth(Layout, props) {
    const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo')) || {};
    const { token = '' } = userInfo;
    const auth = token !== '' ? false : true;
    if ( auth ) { 
      return <Redirect to="/login" />;
    } else {
      return <Layout {...props} />
    }
  }

export default RouterDom


