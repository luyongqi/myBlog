<template>
  <div class="app-wrapper">
    <Slider></Slider>
    <Header></Header>
    <section class="main-container">
      <app-main></app-main>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import AppMain  from './components/AppMain'
// import ResizeMixin from './mixin/ResizeHandler'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'

export default {
  name: 'layout',
  components: {
    Header,   //头部导航
    AppMain, //内容组件
    Footer,
    Slider  
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
    padding-top: 60px;
  }
</style>
