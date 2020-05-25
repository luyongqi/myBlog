/*
 * @Author: 卢勇其
 * @Date: 2020-05-25 15:02:14
 * @LastEditors: your name
 * @LastEditTime: 2020-05-25 16:13:15
 */ 
import { instance } from '../axios'

const prefix = 'api/usercenter'

export const login = (data) => instance.post(`/${prefix}/login`,data)      // 登录
export const logout = (data) => instance.post(`/${prefix}/logout`, data)    // 退出登录
