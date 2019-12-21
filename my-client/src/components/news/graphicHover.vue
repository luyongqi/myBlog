<template>
    <section class="topnews">
        <router-link :to="url">
            <el-image class="timg" :src="img1" fit="cover"></el-image>
            <span>安静地做一个爱设计的女子</span>
        </router-link>
    </section>
</template>

<script>
import Vue from 'vue'
import { Image } from 'element-ui';
Vue.use(Image)

export default {
    props: {
        url: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            img1: require('@/assets/images/h1.jpg'),
        }
    }
}
</script>

<style lang="scss" scoped>
    .topnews {
        display: block;
        margin: 20px 0;
        background: #000;
        position: relative;
        overflow: hidden;
        border-radius: 3px;
        max-height: 110px;
        &:hover .timg{
          opacity: 0.9;
          transform: scale(1.1);
        }
        .timg{
          width: 100%;
          opacity: 0.7;
          transition: all 0.5s;
        }
         span {
            bottom: 0;
            position: absolute;
            bottom: 30%;
            left: 0;
            right: 0;
            color: #FFF;
            text-align: center;
            font-size: 15px;
            padding: 0 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-height: 22px;
        }
      }
</style>


