/*
 * @Author: 卢勇其
 * @Date: 2020-06-12 17:13:46
 * @LastEditors: your name
 * @LastEditTime: 2020-06-12 17:30:39
 */ 
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './Reducer'

// export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
export default createStore(reducer,applyMiddleware(thunk))