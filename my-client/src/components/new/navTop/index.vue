<template>
    <div class="nav-top">
        <div class="logo-avtart" @click="gotoHome">
            拈花一笑
        </div>
        <div class="nav-top-list">
            <nav-top-list class="nav-top-component"></nav-top-list>
        </div>
        <div class="user-avtar">
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img class="user-avatar" :src="avatar">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <router-link class="inlineBlock" to="/">
                    <el-dropdown-item>
                        首页
                    </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import navTopList from '@/components/new/navTop/navTopList.vue';
import {mapMutations,mapGetters} from 'vuex';
import {logoutNew} from '@/api/user.js'

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'avatar'
        ]),
    },
    methods:{
        ...mapMutations([
            'setCurrentPath'
        ]),
        
        gotoHome(){
            this.setCurrentPath({currentPath:'first'}); 
            this.$router.push({name:'first'})
        },
        // 退出登录
        logout() {
            logoutNew().then(res=>{
                console.log(res,'这里是退出登录的返回值')
                location.reload(); //刷新页面
            })
        }
    },
    components:{
        navTopList, //这里是顶部大导航
    },
}



</script>

<style lang="scss" scoped>
    .nav-top{
        width: 100%;
        position: fixed;
        left: 0;top: 0;
        height: 49px;
        background:#304156;
        z-index: 100;
        .logo-avtart{
            width: 181px;
            height: 100%;
            float: left;
            font-size: 30px;
            color: #ffffff;
            text-align: center;
            line-height: 50px;
            font-weight: bold;
            border-right: 1px solid #ffffff;
        }
        .nav-top-list{
            position: absolute;
            height: 100%;
            left: 180px;right: 180px;
            top: 0;
            margin: 0 auto;

            //这里是头部的导航
            .nav-top-component{
                color: #ffffff;
                padding: 0 10px;
            }

        }
        .user-avtar{
            width: 180px;
            float: right;
            height: 100%;
        }

    }

    //用户头像的操作
    .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }

</style>