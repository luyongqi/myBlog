// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "babel-polyfill";       //解决浏览器兼容js的api
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';         //用于在某些条件下隐藏元素

import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 2000 })         //size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
