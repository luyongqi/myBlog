import { login, logout, getInfo } from '@/api/login'
import { loginNew,getInfoNew } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import Cookie from 'js-cookie'

const user = {
  state: {
    token: getToken(),
    name:'',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginNew(username, userInfo.password).then(response => {
          const data = response.data
          const tokenStr = data.token
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          commit('SET_AVATAR','https://p3.ssl.qhimgs1.com/sdr/400__/t0124774c0ce8526739.jpg')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state },{token}) {
      return new Promise((resolve, reject) => {
        getInfoNew(token).then(response => {
          const data = response.data
          commit('SET_NAME', data.loginName)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
