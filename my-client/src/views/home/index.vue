<template>
  <div class="app-container">

    <el-row :gutter="12">
      <!--左侧主体内容-->
      <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
        <div class="main-left-box">
          <!--顶部-->
          <div class="headbox">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                <el-carousel class="carousel" trigger="click" height="260px" :interval="5000">
                  <el-carousel-item class="carousel-item" v-for="(item,index) in carouselData" :key="index">
                    <el-image class="img" :src="item.url" fit="cover">
                      <div slot="placeholder" class="image-slot">
                        加载中
                        <span class="dot">...</span>
                      </div>
                    </el-image>
                  </el-carousel-item>
                </el-carousel>
              </el-col>

              <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                <el-image :src="img1" fit="cover" style="width:100%;height:125px;border-radius:3px;margin-bottom:8px">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </el-col>

              <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                <el-image :src="img2" fit="cover" style="width:100%;height:125px;border-radius:3px;">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </el-col>
            </el-row>
          </div>
          <!--tab-->
          <div class="whitebg tabbox">

          </div>
        </div>
      </el-col>

      <!--右侧内容-->
      <el-col class="hidden-xs-only" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="main-right-box">
          <div class="card"></div>
          <div class="whitebg notice"></div>
          <div class="whitebg recommend"></div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Carousel, Image, Row, Col } from 'element-ui';
Vue.use(Carousel, Image, Row, Col)

export default {
  name: 'home',
  data() {
    return {
      img1: require('@/assets/images/h1.jpg'),
      img2: require('@/assets/images/h2.jpg'),
      carouselData: [
        { url: require('@/assets/images/1.jpg'), title: '你看我叼吗1', id: 1 },
        { url: require('@/assets/images/2.jpg'), title: '你看我叼吗2', id: 2 },
        { url: require('@/assets/images/3.jpg'), title: '你看我叼吗3', id: 3 },
        { url: require('@/assets/images/4.jpg'), title: '你看我叼吗3', id: 3 }
      ]
    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.app-container {
  // 白色背景盒子
  .whitebg {
    background: #fff;
    border-radius: 3px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }
   // 左侧
  .main-left-box {
    max-width: 900px; 
    // 顶部盒子内容
    .headbox {
      .carousel {
        width: 100%;
        margin-bottom: 20px;
        .carousel-item {
          .img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
      }
    } 
    //tab
    .tabbox{
      width: 100%;
    }

  } 
  // 右侧
  .main-right-box {
    .card {
      box-shadow: 0px 1px 0px rgba(255, 255, 255, .1), inset 0px 1px 1px rgba(0, 0, 0, .7);
      border-radius: 3px;
      background: #2A2A2A;
      height: 260px;
      overflow: hidden;
      margin-bottom: 20px;
    }
  }
}
</style>
