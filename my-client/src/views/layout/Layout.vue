<template>
  <div class="app-wrapper" :class="classObj">
    <Header></Header>
    <div class="main-container">
      <app-main></app-main>
    </div>

  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
import Header from './components/Header'
import Header from './components/Header'
import {getMenuList,getMenuListAll} from '@/api/menu';

export default {
  name: 'layout',
  components: {
    Header,   //头部导航
    Navbar, //二级navbar 放页面当前位置的
    Sidebar, //左侧导航
    AppMain, //内容组件
  },
  // mixins: [ResizeMixin],
  computed: {
   
  },
  created(){
    //这里可以请求菜单,然后存入state 避免重复请求 后面权限需要设置菜单的显示与隐藏
    getMenuList().then(res=>{

      console.log(res,'这里是菜单(权限)的获取')
    })

    getMenuListAll().then(res=>{

      console.log(res,'这里是菜单(所有)的获取')

    })
    
  }
}




</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
