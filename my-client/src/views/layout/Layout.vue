<template>
  <div class="app-wrapper">
    <Slider ref="slider" @click="closeSlider"></Slider>
    <Header ref="header" @click="getOpenStatus"></Header>
    <section class="main-container">
      <app-main ref="main"></app-main>
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
    console.log(this.$refs.header)
  },
  methods:{
    // 点击选项 关闭侧边栏
    getOpenStatus(status){
      this.$refs.slider.drawer = status;
    },
    // 点击选项 关闭header
    closeSlider(status){
      this.$refs.header.isOpen = status;
    }
  }
}


</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    max-width: 1240px;
    margin:auto;
    padding-top: 60px;
  }
  .main-container{
    min-height: 60vh;
  }
</style>
