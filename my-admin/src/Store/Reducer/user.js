/*
 * @Author: 卢勇其
 * @Date: 2020-06-12 17:21:11
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 11:53:52
 */ 
import actionType from '../Action/actionType'

const initState = {
    userInfo:{userName:"lyq",pwd:"123456"},
    isLogin:false
}
    

export default (state = initState , action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_START:
            return state
        case actionType.GET_USER_INFO:
            return [...action.value]
        case actionType.GET_PRODUCT_ERROR:
            return {error:'出错了'} 
        default: return state
    }
}