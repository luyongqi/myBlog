<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.menuSrc" v-if="item.menuName">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.menuName}}</span>
        <router-link v-else :to="{name:item.menuSrc}">{{item.menuName}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>

import {mapState} from 'vuex'

export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  computed:{
    ...mapState([
      'navTop',
    ])
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    },
    'navTop.navTopChange'(){
      this.getBreadcrumb(); //只要菜单修改了 就重新执行该事件
    },
    'navTop.navTopListAll':{
      handler(){
        this.getBreadcrumb(); //只要菜单来了就显示
      },
      deep:true
    },
  },
  methods: {
    getBreadcrumb() {

      if(this.navTop.navTopListAll.length<=0){
        return;
      }

      let that = this;
      let matched = this.$route.matched.filter(item => item.name)
      console.log(matched,'需要的')
      console.log(this.navTop.navTopListAll,'所有的')
      const first = matched[0]
      // if (first && first.name !== 'home') {
      //   matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched)
      // }
      let newarr = []
      matched.forEach(itemnew=>{
          that.navTop.navTopListAll.forEach(item=>{
              if(item.menuSrc==itemnew.name){
                newarr.push(item)
              }
          })
      })


      console.log(newarr,'最终的数据')


      this.levelList=newarr
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
