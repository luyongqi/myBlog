<template>
    <header class="header">
        <div class="navbox">
            <el-row :gutter="30">
                <!--展开-->
                <el-col class="hidden-md-and-up " :xs="4" :sm="3">
                    <div class="more">
                        <div class="mnavh" :class="isOpen?'open':''" @click="hideToggle">
                           <span class="navicon"></span>
                        </div>
                    </div>
                </el-col>

                <!--logo-->
                <el-col :xs="16" :sm="18" :md="5" :lg="4" :xl="4">
                    <div class="logo" @click="toIndex">卢勇其个人博客</div>
                </el-col>
                
                <!--导航 -->
                <el-col class="hidden-sm-and-down" :xs="0" :sm="18" :md="17" :lg="18" :xl="18">
                    <el-menu :default-active="$route.path" background-color="#1C2327" text-color="#fff"  active-text-color="#409eff" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <template v-for="(item,i) in navList">
                            <el-menu-item :index="item.url" :key="i" v-if="item.subList.length==0" :route="item.url" >
                                 <span class="link">
                                    {{item.title}}
                                </span>
                            </el-menu-item>

                            <el-submenu :index="item.url" :key="i" v-if="item.subList.length>0">
                                <template slot="title">
                                    <span class="link">
                                        {{item.title}}
                                    </span>
                                </template>
                                <el-menu-item v-for="(p,k) in item.subList" :key="k" :index="p.url" :route="p.url">
                                    <span class="link">
                                        {{p.title}}
                                    </span>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </el-menu>

                </el-col>
                <!--搜索-->
                <el-col :xs="4" :sm="3" :md="2" :lg="2" :xl="2">
                    <div class="search"></div>
                </el-col>
            </el-row>
        </div>
    </header>
</template>

<script>
import Vue from 'vue'
import { Row, Col, Menu } from 'element-ui';
Vue.use(Row, Col, Menu)

export default {
    data() {
        return {
            isOpen:false,     //是否打开侧边栏
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
                    url: '',
                    subList: [
                        {
                            title: 'css3|html5',
                            url: '/study',
                        },
                        {
                            title: '网站建设',
                            url: '/web',
                        },
                        {
                            title: '推荐工具',
                            url: '/web',
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
    computed: {

    },
    created() {

    },
    methods: {
        // 回首页
       toIndex(){
         this.$router.push({path:"/"})
       },
        hideToggle(){
            this.isOpen = !this.isOpen;
            this.$emit('click',this.isOpen)
        },
        handleSelect(key, keyPath) {
            if(key==""){                  
                return
            }
            this.$router.push(key)
        }
    }

}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background: #1C2327;
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
    } // 展开
    
    .mnavh {
        width: 50px;
        position: relative;
        padding: 0 10px;
        height: 60px;
        padding-top: 28px;
        &.open .navicon:before {
            margin-top: 0;
            transform: rotate(45deg);
        }
        &.open .navicon:after {
            margin-top: 0;
            transform: rotate(-45deg);
        }
        &.open .navicon {
            background: none;
        }
        .navicon {
            display: block;
            position: relative;
            width: 30px;
            height: 5px;
            background-color: #fff;
            // margin-top: 28px;
            &:before,
            &:after {
                content: '';
                display: block;
                width: 30px;
                height: 5px;
                position: absolute;
                background: #fff;
                transition-property: margin, transform;
                transition-duration: 300ms;
            }
            &:before {
                margin-top: -10px;
            }
            &:after {
                margin-top: 10px;
            }
        }
    } // logo
    .logo {
        font-size: 22px;
        text-align: center;
        cursor: pointer;
    } // 搜索
    .search {
        width: 60px;
        height: 60px;
        float: right;
        cursor: pointer;
        background: url(../../../assets/images/bg.png) no-repeat center !important;
    }
    .navbox {
        max-width: 1240px;
        margin: auto;
        .el-menu-item,
        .el-menu--horizontal>.el-submenu .el-submenu__title {
            padding: 0 15px;
        }
        .link {
            display: inline-block;
            height: 100%;
            font-size: 15px;
        }
        .el-menu.el-menu--horizontal {
            border: none;
        }
        .el-menu--horizontal>.el-menu-item.is-active,
        .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
            border-bottom: none;
            background: none;;
        }
        .el-menu>.el-menu-item a:hover {
            color: #409EFF !important;
        }
        .link:hover {
            color: #409EFF !important;
        }
    }
}
</style>

