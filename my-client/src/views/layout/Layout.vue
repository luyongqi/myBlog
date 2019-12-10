<template>
  <div class="app-wrapper">
    <Slider ref="son"></Slider>
    <Header @click="getOpenStatus"></Header>
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
  
  },
  methods:{
    getOpenStatus(status){
      console.log(status)
      this.$refs.son.drawer = status;
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
</style>
