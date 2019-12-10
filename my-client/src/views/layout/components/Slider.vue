<template>
    <div class="slider">
        <el-drawer wrapperClosable="false" :visible.sync="drawer" direction="rt1" size="100%" :before-close="handleClose">

            <el-menu default-active="2" class="el-menu-demo" @open="handleOpen" @close="handleClose">
                <template v-for="(item,index) in navList">

                    <el-menu-item :index="index" :key="index" v-if="item.subList.length==0" :route="item.url">
                        <i class="el-icon-setting"></i>
                        <router-link class="link" :to="item.url">
                            {{item.title}}
                        </router-link>
                    </el-menu-item>

                    <el-submenu :index="index" :key="index+'1'" v-if="item.subList.length>0">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <router-link class="link" :to="item.url">
                                {{item.title}}
                            </router-link>
                        </template>

                        <el-menu-item v-for="(p,k) in item.subList" :key="k" :index="index+'-'+k" :route="p.url">
                            <router-link class="link" :to="p.url">
                                {{p.title}}
                            </router-link>
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
                    url: '/webDesign',
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
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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


