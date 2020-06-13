/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 20:20:16
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 17:14:05
 * @Description: file content
 */ 

import React, { Component } from 'react'
 import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

 import LayoutIndex from './components/Layout'     //页面布局
 import { adminRouter } from './Routes'
 import { connect } from 'react-redux'

function App(){
    let nav = adminRouter.filter(item=>item.isNav === true)
   
    let routerArr = adminRouter.map((item)=>{       //所有路由二维数组
        if(item.children&&item.children.length>0){
           return [...item.children]
        }else{
            return item 
        }
        
    })
    let routers = [].concat.apply([],routerArr)     //所有路由一维数组

    return (
        
        <LayoutIndex nav={nav}>
            <Switch>
                {
                    routers.map(item => {
                        return <Route
                            key={item.pathname}
                            exact={item.exact}
                            path={item.pathname}
                            render={(props) => {
                                return <item.component {...props} />
                            }} />
                        })
                }
                <Redirect from='/admin' to={adminRouter[0].pathname} exact />
                <Redirect to='/404' />
            </Switch>  
        </LayoutIndex>   
            
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
  const getState = (state) => {
    // console.log(state.reducer)
    return {
        isLoad: state.reducer.isLoad,
        datalist: state.reducer.datalist
    }
 }
export default connect(getState)(App)


