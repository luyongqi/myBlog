/*
 * @Author: 卢勇其
 * @Date: 2020-06-12 17:19:26
 * @LastEditors: your name
 * @LastEditTime: 2020-06-12 17:19:26
 */ 
import {combineReducers} from 'redux'
import reducer from './reducer'
import user from './user'

export default combineReducers({
    reducer,
    user
})