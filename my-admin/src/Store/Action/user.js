/*
 * @Author: 卢勇其
 * @Date: 2020-06-12 17:15:52
 * @LastEditors: your name
 * @LastEditTime: 2020-06-12 17:18:00
 */ 

import actionType from './actionType'

export const getUserInfo = (info) => {         //获取用户信息
    return {
        type:actionType.GET_USER_INFO,
        value:info
    }
}
