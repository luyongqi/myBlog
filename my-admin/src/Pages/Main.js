/*
 * @Author: 卢勇其
 * @Date: 2020-05-23 19:58:48
 * @LastEditors: your name
 * @LastEditTime: 2020-05-25 16:47:51
 * @Description: file content
 */ 
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import AdminIndex from './article/AdminIndex'

function Main(){
    return (
        <Router>
            <Route path="/login/" exact component={Login}></Route>
            <Route path="/index" component={AdminIndex}></Route>
        </Router>
    )
}

export default Main