<template>
  <div class="app-container">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in carouselData" :key="index">
          <el-image :src="item.url" :fit="contain">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
          </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Vue from 'vue'
import { Carousel,Image } from 'element-ui';
Vue.use(Carousel,Image)

export default {
  name: 'home',
  data() {
    return {
      carouselData:[
        {url:require('@/assets/images/1.jpg'),title:'你看我叼吗1',id:1},
        {url:require('@/assets/images/2.jpg'),title:'你看我叼吗2',id:2},
        {url:require('@/assets/images/3.jpg'),title:'你看我叼吗3',id:3}
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

}
</style>
