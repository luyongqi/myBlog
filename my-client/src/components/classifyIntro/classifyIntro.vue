<template>
    <div class="lanmu">
        <el-image class="img" :src="coverImg" fit="cover"></el-image>
        <h1>{{title}}</h1>
        <p>{{intro}}</p>       
    </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'element-ui';
Vue.use(Image)

export default {
    name:"classifyIntro",
    props: {
        title: {
            type: String,
            default: '个人博客日记'
        },
        coverImg:{
            type:String,
            default: require('@/assets/images/lm01.jpg')
        },
        intro:{
            type:String,
            default: '个人博客用来做什么？我的个人博客网站它不仅仅是我个人兴趣和爱好，还是我创业的起点。我爱网页设计，我爱写前端代码。它充实了我的生活，实现了我的目标和梦想。'
        },
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .lanmu {
        background: #fff;
        border-radius: 3px;
        padding: 20px;
        margin-bottom: 20px;
        overflow: hidden;
        .img{
            width: 130px;
            float: left;
            margin-right: 20px;
        }
        h1{
            font-size: 22px;
            margin-bottom: 15px;
        }
        p{
            color: #666;
            line-height: 1.5;
        }
      }
</style>


