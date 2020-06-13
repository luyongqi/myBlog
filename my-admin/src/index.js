/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:35:23
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 13:49:46
 * @Description: file content
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './Store/store'
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux'
import { mainRouter } from './Routes'
import App from './App';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router>
        <Switch>
            <Route path='/admin' render={(routerProps) => {
                return <App {...routerProps} />
            }} />
            {
              mainRouter.map(item=>{
                return <Route key = {item.pathname} path={item.pathname} component={item.component} />
              })
            }
            <Redirect from ='/' to='/admin' exact />
            <Redirect to='/404' exact />
        </Switch>
      </Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

