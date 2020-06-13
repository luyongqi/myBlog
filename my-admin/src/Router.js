/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 20:20:16
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 11:11:58
 * @Description: file content
 */ 

 import React, { Component, useEffect } from 'react';
 import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

 import LayoutIndex from './components/Layout'     //页面布局
 import Login from './Pages/Login'       //登录
 import Home from './Pages/Home'  //工作台
 import AddArticle from './Pages/article/AddArticle'   //添加文章
 import NotFound from './Pages/NotFound' 

function RouterDom(props){
    return (
        <Router>
            <Switch>
                <Route path="/" exact  component={Login}/> 
                <Route path="/login"  component={Login}/> 
                <Route  path="/404" component={NotFound}/>
                
                <LayoutIndex>
                    <Switch>
                        <Route path="/admin/home/" exact component={ Home }/>
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


