import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};                                                          //阻止router跳转同一页面

/* Layout */
import Layout from '../views/layout/Layout'

const NotFound = () => import("@/views/404")
const Home = () => import("@/views/home/index")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404', 
      name:'404',
      component: NotFound, 
      hidden: true
    },
    {
      path: '/',
      name:'first',
      component: Layout,
      redirect: '/home',
      meta: {title: '首页', icon: 'iconziyuan'},
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
      ]
    },
  ]
})
