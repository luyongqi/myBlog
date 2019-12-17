import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

import navTop from './modules/navTop'; //引入顶部菜单的头部vuex
import role from './modules/role'; //引入顶部菜单的头部vuex

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    navTop,//顶部菜单的头部vuex
    role,//角色的store
  },
  getters
})

export default store
