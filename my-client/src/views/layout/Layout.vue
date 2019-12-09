<template>
  <div class="app-wrapper" :class="classObj">
    <Header></Header>
    <section class="main-container">
      <app-main></app-main>
    </section>
  </div>
</template>

<script>
import { AppMain } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
import Header from './components/Header'

export default {
  name: 'layout',
  components: {
    Header,   //头部导航
    AppMain, //内容组件
  },
  // mixins: [ResizeMixin],
  computed: {
   
  },
  created(){
  
  }
}


</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    max-width: 1200px;
    margin:auto;
    margin-top: 60px;
  }
</style>
