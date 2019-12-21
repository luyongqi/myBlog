<template>
    <div class="graphic-item">
        <i>
            <el-image class="img" :src="img1" fit="cover"></el-image>
        </i>
        <p>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</p>
    </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'element-ui';
Vue.use( Image )

export default {
    name:"graphic-item",
    props: {
        title: {
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
   .graphic-item{
        overflow: hidden;
        margin-bottom: 10px;
        height: 60px;
        &:hover{
            background: #f6f6f6;
            cursor: pointer;
        }
        &:hover .img{
            transform: scale(1.1);
        }
        i{
            width: 70px;
            height: 70px;
            margin-right: 10px;
            overflow: hidden;
            display: block;
            float: left;
            .img{
                height: 100%;
                width: 100%;
                transition: all .5s ease;
            }
        }
        p{
            margin-top: 10px;
            line-height: 20px;
            max-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            font-size: 14px;
        }
   }
</style>


