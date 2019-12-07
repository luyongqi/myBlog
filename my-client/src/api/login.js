import request from '@/utils/request'

//拈花后台管理系统登录api
export function loginNew(loginName, password,verifyCode) {
  return request({
    url: '/v1/bm/user/login',
    method: 'post',
    data: {
      loginName,
      password,
      verifyCode, //验证码 暂时不需要
    }
  })
}

//拈花后台管理系统拉取api
export function getInfoNew(token){

  return request({
    url: '/v1/bm/user/only',
    method: 'post',
    data: {
      token, //获取用户信息需要的token
    }
  })
}

//拈花后台管理系统用户注册api
export function registerNew(data){
  return request({
    url: '/v1/bm/user/register',
    method: 'post',
    data, //需要的参数
  })
}