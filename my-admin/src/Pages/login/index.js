/*
 * @Author: 卢勇其
 * @Date: 2020-05-23 19:59:05
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 10:42:15
 * @Description: file content
 */ 
import React, { useState } from 'react'
import 'antd/dist/antd.css'
import './index.scss'
import { Card, Input, Button, Spin } from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { login } from '../../apis/common.js'

function Login(props){
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    // 登录
    const checkLogin = async ()=>{
        setIsLoading(true)
        // const res = await login()
        window.sessionStorage.setItem('userInfo',{token:'userToken'})
        props.history.push('/admin/home')

        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }

    return (
        <div className="login-div">
            <Spin tip="..." spinning={isLoading}>
                <Card title="JSPang blog System" border={true} style={{width:400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined style={{color:'rgba(0,0,0,0.25)'}}/>}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<LockOutlined style={{color:'rgba(0,0,0,0.25)'}}/>}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login