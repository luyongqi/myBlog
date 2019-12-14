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
const Photo = () => import("@/views/photo/index")
const Dirary = () => import("@/views/dirary/index")
const Study = () => import("@/views/study/index")
const Timer = () => import("@/views/timer/index")
const Word = () => import("@/views/word/index")
const About = () => import("@/views/about/index")

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name:'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/photo', 
          name:'photo',
          component: Photo
        },
        {
          path: '/dirary', 
          name:'dirary',
          component: Dirary
        },
        {
          path: '/study', 
          name:'study',
          component: Study
        },
        {
          path: '/about', 
          name:'about',
          component: About
        },
        {
          path: '/timer', 
          name:'timer',
          component: Timer
        },
        {
          path: '/word', 
          name:'word',
          component: Word
        },
        {
          path: '/404', 
          name:'404',
          component: NotFound
        },
      ]
    },
  ]
})
