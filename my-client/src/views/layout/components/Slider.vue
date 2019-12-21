<template>
    <div class="slider">
        <el-drawer  :visible.sync="drawer" direction="rt1" size="100%" :before-close="handleClose">

            <el-menu default-active="0" class="el-menu-demo"  @select="handleSelect">
                <template v-for="(item,index) in navList">

                    <el-menu-item :index="item.url" :key="index" v-if="item.subList.length==0" :route="item.url" @click="closeSlider">
                        <i class="el-icon-setting"></i>
                        <span class="link">
                            {{item.title}}
                        </span>
                    </el-menu-item>

                    <el-submenu :index="item.url" :key="index+'1'" v-if="item.subList.length>0">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span class="link">{{item.title}}</span>
                            <!--<router-link class="link" :to="item.url">
                                {{item.title}}
                            </router-link>-->
                        </template>

                        <el-menu-item v-for="(p,k) in item.subList" :key="k" :index="p.url" :route="p.url" @click="closeSlider">
                            <span class="link">
                                {{p.title}}
                            </span>
                        </el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>

        </el-drawer>
    </div>
</template>

<script>

import Vue from 'vue'
import { Drawer, Menu } from 'element-ui';
Vue.use(Drawer, Menu)
export default {
    data() {
        return {
            drawer: false,
            navList: [
                {
                    title: '网站首页',
                    url: '/home',
                    subList: []
                },
                {
                    title: '我的相册',
                    url: '/photo',
                    subList: []
                },
                {
                    title: '我的日记',
                    url: '/dirary',
                    subList: []
                },
                {
                    title: '学无止境',
                    url: '/study',
                    subList: [
                        {
                            title: 'css3|html5',
                            url: '/webDesign',
                        },
                        {
                            title: '网站建设',
                            url: '/webDesign',
                        },
                        {
                            title: '推荐工具',
                            url: '/webDesign',
                        },
                    ]
                },
                {
                    title: '关于我',
                    url: '/about',
                    subList: []
                },
                {
                    title: '时间轴',
                    url: '/timer',
                    subList: []
                },
                {
                    title: '留言',
                    url: '/word',
                    subList: []
                },
            ]
        }
    },
    methods: {
        closeSlider(){
            this.drawer = false;
            this.$emit('click',false)
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    this.$emit('click',false)
                    done();
                })
                .catch(_ => { });
        },
        handleSelect(key, keyPath) {
            if(key=="/study"){                  //有二级导航的、点一级导航不跳转
                return
            }
            this.$router.push(key)
        }
    }
}
</script>

<style lang="scss" scoped>
.slider {
    .el-menu-demo{
        width:30vw;
        text-align: left;
    }
}
</style>


