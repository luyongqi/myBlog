<template>
    <div class="bloglist">
        <div class="box-card" v-for="(o,i) in 4" :key="i">
            <el-card :body-style="{ padding: '0px' }">
                <h3 class="blogtitle">
                    <b>【顶】</b>
                    <router-link class="btitle" to=''>作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</router-link>
                </h3>
                <span class="blogpic">
                    <i>
                        <router-link to=''>设计心得</router-link>
                    </i>
                    <router-link to='' title='作为一个设计师,如果遭到质疑你是否能恪守自己的原则?'>
                        <el-image class="imgscale" :src="img2" fit="cover"></el-image>
                    </router-link>
                </span>
                <p class="blogtext">
                    就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深
                </p>
                <p class="bloginfo">
                    <i class="avatar">
                        <el-image class="aimg" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" fit="cover"></el-image>
                    </i>
                    <span>2018-11-08</span>
                    <span>
                        【
                        <router-link class="type" to="">设计心得</router-link>】
                    </span>
                    <el-button type="text" class="more">阅读更多</el-button>
                </p>

            </el-card>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Image, Card, Button } from 'element-ui';
Vue.use(Image, Card, Button)

export default {
    data() {
        return {
            img2: require('@/assets/images/h2.jpg'),
        }
    }
}
</script>

<style lang="scss" scoped>
.el-card.is-always-shadow {
    box-shadow: none;
    border: none;
}

.bloglist {
    .box-card {
        overflow: hidden;
        border-bottom: #eee 1px dashed;
        padding-bottom: 20px;
        position: relative;
        &:hover .blogtitle .btitle {
            color: #337ab7;
        } // 标题
        .blogtitle {
            font-size: 18px;
            margin-bottom: 0 0 10px 0;
            b {
                color: red;
            }
            .btitle {
                transition: all 0.5s ease;
            }
        } // 文章主图
        .blogpic {
            float: left;
            width: 23.2%;
            margin-right: 20px;
            display: block;
            overflow: hidden;
            border-radius: 3px;
            position: relative;
            & i {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 9;
                font-style: normal;
                padding: 3px 5px;
                background: rgba(18, 182, 221, .8);
                font-size: 14px;
                color: #fff;
            }
            .imgscale {
                display: block;
                width: 100%;
            }
            .imgscale:hover {
                transform: scale(1.1)
            }
        } // 文章内容
        .blogtext {
            font-size: 14px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            margin-top: 20px;
            line-height: 1.5;
        } // 用户信息
        .bloginfo {
            margin-top: 20px;
            overflow: hidden;
            color: #999;
            line-height: 34px;
            .avatar {
                position: relative;
                float: left;
                width: 34px;
                height: 34px;
                border-radius: 100%;
                padding: 2px;
                display: block;
                background: -webkit-linear-gradient(bottom left, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));
                background: -o-linear-gradient(bottom left, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));
                background: linear-gradient(to top right, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));
                overflow: hidden;
                .aimg {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            span {
                margin: 0 5px;
                .type {
                    color: #096;
                }
            }
        } // 阅读按钮
        .more {
            display: block;
            right: 10px;
            bottom: 20px;
            position: absolute;
            font-size: 15px;
            padding: 6px 10px;
            background: #12b7de;
            color: #fff;
            border-radius: 3px;
        }
    }
}
</style>


