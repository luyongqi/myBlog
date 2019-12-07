<template>
    <div>
        <!-- 导航组件 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selectFn">
            <el-menu-item class="el-element-item"
            v-for="(item,index) in navTop.navTopList "
            :key="index"
            :index="item.name"
            :style="name==item.name?'background:#ffffff;color:#303133':''"
            >
            {{item.meta?item.meta.title:'其他'}}
            </el-menu-item>
        </el-menu>
        
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
import {getMenuList,getMenuListAll} from '@/api/menu';
import {setDataToRoute} from '@/utils/common'
export default {
    data(){
        return{
            activeIndex:'first', //当前应该显示的路由
            // navTopList:[], //顶部的菜单栏
            name:'', //首页的路径
        }
    },
    watch:{
        $route:{
            handler(newstr){
                console.log(newstr, '这里是我的watch 路由')
                let routeOne = newstr.matched[0];
                this.name=routeOne.name;
                this.setCurrentPath({currentPath:routeOne.name}); 
            },
            deep:true,
        }, //监听route的变化
    },
    computed:{
      ...mapState([
        'navTop',
      ])
    },
    methods:{
        ...mapMutations([
            'setCurrentPath',
            'setNavTopList', //存储所有的菜单(有route结构)
            'setNavTopListAll', //存储所有的菜单(没有route结构)
        ]),
        selectFn(key,keyPath){

            this.name=key;

            //通知侧边栏导航组件当前的顶级菜单path;
            this.setCurrentPath({currentPath:key}); 
            this.$router.push({name:this.name})
        }
    },
    //组件创建的时候获取路由的数组
    created(){
        //这里是初始化
            // let navTopList = this.$router.options.routes; //取出当前路由
            // this.navTopList = navTopList.slice(2,navTopList.length-1);
            // this.name = this.$route.matched[0].name; //初始化该显示的菜单
            // this.setCurrentPath({currentPath:this.name}); 

        let that = this;
        getMenuListAll().then(res=>{
           
            let list =this.$api.cloneDeep(res.data); //这里是获取到的所有的菜单

            that.setNavTopListAll({list:res.data}); //将获取到的菜单数据存入store

            //此处需要我们写方法 通过获取到的数据 组成路由般的数据结构
            let navList = setDataToRoute(list)

            console.log(navList,'这里是获取好的分级的路由')
            that.name = that.$route.matched[0].name; //初始化该显示的菜单
            that.setCurrentPath({currentPath:this.name}); 


            that.setNavTopList({list:navList}); //将router结构的菜单存入store

            console.log(that.navTop,'state的值')

        })


    },
}



</script>

<style scoped lang="scss">
    .el-menu-demo{
        width: 100%;
        height: 50px;
        background-color: transparent;
        border-bottom:none;
        .el-element-item{
            height: 50px;
            line-height: 50px;
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            border-bottom:none;
        }
        
    }
</style>