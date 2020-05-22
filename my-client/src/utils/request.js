import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 6000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {

  // let token = getToken() || '';
 
  // if (store.getters.token) {
  //   config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    const res = response.data; //得到返回值得json数据
    if (res.retCode !== '000000') {
      Message({
        message: res.errInfo,
        type: 'error',
        duration: 1.5 * 1000
      })

      // 401:未登录;
      // if (res.code === 401||res.code === 403) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload()// 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject(res.errInfo)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
