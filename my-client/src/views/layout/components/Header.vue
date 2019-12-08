<template>
    <header class="header">
        <div class="navbox">
            <el-row :gutter="30">
                <!--logo-->
                <el-col :xs="20" :sm="21" :md="5" :lg="4" :xl="4">
                    <div class="logo">卢勇其个人博客</div>
                </el-col>

                <!--导航 -->
                <el-col class="hidden-sm-and-down" :xs="0" :sm="18" :md="17" :lg="18" :xl="18">
                    <el-menu :default-active="activeIndex" background-color="#000000" text-color="#fff" active-text-color="#409EFF" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <template v-for="(item,index) in navList">
                            <el-menu-item :index="index" :key="index" v-if="item.subList.length==0" :route="item.url">
                                <router-link class="link" :to="item.url">
                                    {{item.title}}
                                </router-link>
                            </el-menu-item>
                            <el-submenu :index="index" :key="index" v-if="item.subList.length>0">
                                <template slot="title">
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

                </el-col>
                <!--搜索-->
                <el-col :xs="4" :sm="3" :md="2" :lg="2" :xl="2">
                    <div class="search">搜索</div>
                </el-col>
            </el-row>
        </div>
    </header>
</template>

<script>
import Vue from 'vue'
import { Row, Col, Menu } from 'element-ui';
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)

export default {
    data() {
        return {
            activeIndex: '1',
            navList: [
                {
                    title: '网站首页',
                    url: '/home',
                    subList: []
                },
                {
                    title: '个人博客',
                    url: '/personalBlog',
                    subList: []
                },
                {
                    title: '网站制作',
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
                    title: '设计心得',
                    url: '/designFeel',
                    subList: []
                },
                {
                    title: '关于我',
                    url: '/aboutMe',
                    subList: []
                },
                {
                    title: '时间轴',
                    url: '/timerShaft',
                    subList: []
                },
                {
                    title: '博客导航',
                    url: '/blogNav',
                    subList: []
                },
                {
                    title: '留言',
                    url: '/leaveWord',
                    subList: []
                },
            ]
        }
    },
    computed: {

    },
    created() {

    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }

}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background: #000;
    position: fixed;
    color: #fff;
    line-height: 60px;
    top: 0;
    left: 0;
    z-index: 3000;
    &::before {
        display: block;
        width: 100%;
        height: 5px;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
        z-index: 3000;
    }
    .logo {
        font-size: 22px;
    }
    .search {}
    .navbox {
        max-width: 1200px;
        margin: auto;
        .el-menu-item,
        .el-menu--horizontal>.el-submenu .el-submenu__title {
            
            padding: 0 15px;
        }
        .link{
            display: inline-block;
            height: 100%;
            font-size: 15px;
        }
        .el-menu.el-menu--horizontal {
            border: none;
        }
        .el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
            border-bottom: none;
        }
       .el-menu>.el-menu-item a:hover{
            color: #409EFF !important;
        }
       .link:hover {
            color: #409EFF !important;
        }
    }
}
</style>

