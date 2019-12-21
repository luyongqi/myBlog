<template>
    <!--最新博文-->
    <div class="news-card">
        <!--标题-->
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div slot="header" class="rtitle">
                <span>{{title}}</span>
            </div>
            <!--内容-->
            <slot></slot>
        </el-card>
    </div>
</template>

<script>
import Vue from 'vue'
import { Card } from 'element-ui';
Vue.use( Card )

export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    //修改element card组件默认样式 
    .el-card.is-always-shadow {
        box-shadow: none;
        border: none;
        .rtitle {
            height: 100%;
            position: relative;
            span::after {
                position: absolute;
                width: 60px;
                height: 2px;
                content: "";
                background: #1296DB;
                left: 0;
                bottom: -10px;
                transition: all .5s ease;
            }
            span {
                padding: 10px 0;
                font-size: 16px;
                color: #484848;
            }
        }
        .rtitle:hover span:after {
            width: 80px;
        }
    } 
    // 最新博文
    .news-card {
        padding-bottom: 40px;
        border-radius: 3px;
        padding: 20px;
        margin-bottom: 20px;
        overflow: hidden;
         background: #fff;
        .box-card {
            overflow: hidden;
            position: relative;
        }
    }
</style>


