/*
 * @Author: 卢勇其
 * @Date: 2020-05-25 15:02:14
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-25 21:47:08
 */ 
import  instance  from '../axios'

const prefix = 'api/'

export const login = () => instance.get(`/${prefix}/findUser`)      // 登录
export const logout = (data) => instance.post(`/${prefix}/logout`, data)    // 退出登录
