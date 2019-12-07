<template>
    <div class="role-authorization" v-if="isShow">
        <!-- 菜单授权组件 -->
        <el-card shadow="hover" class="authorization">
            <div slot="header" class="title">
                <span class="title-left">菜单授权</span>
                <i  class="iconfont iconguanbi" @click="hiddenFn"></i>
            </div>
            <div class="role-info">
                <span class="role-text">角色编码</span>
                <el-input type="text" disabled style="width:300px" :placeholder="roleData.code"></el-input>
                <span class="role-text text-two">角色描述</span>
                <el-input type="text" disabled :placeholder="roleData.descripe"></el-input>
            </div>
            <div class="role-list">
                <span>选择您要授权的菜单</span>
                <nav-select-role class="select-rolenav" :isRole="isRole" :roleData="roleData" @shandowHidden="shandowHidden"></nav-select-role>
            </div>
            <el-button type="primary" class="subroule" @click="subRole">确定授权</el-button>
        </el-card>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import navSelectRole from '@/components/new/role/navSelectRole.vue'

export default {
    data(){
        return{
           isRole:0, //是否确定授权
        }
    },
    props:{
        isShow:{
            type:Boolean,
            default:false, //默认不显示
        },
        roleData:{
            type:[String,Object],
            default:"",
        }
    },
    components:{
        navSelectRole, //授权联动
    },
    computed:{
        ...mapState([
            'navTop'
        ])
    },
    methods:{
        //隐藏盒子
        hiddenFn(){
            this.$emit('update:isShow',false)
        },
        //确定授权
        subRole(){
            this.isRole++
        },
        //授权成功
        shandowHidden(){
            this.$emit('update:isShow',false)
        }
    },
    mounted(){
        console.log(this.navTop, '组件需要的东西')

    }
}
</script>

<style scoped lang="scss">
     .role-authorization{
         @include maxShandow;
        .authorization{
            @include shandowBox;
            width: 1000px;
            .title{
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .title-left{
                    font-size: 16px;
                    color: $colorBase;
                }
                .title-right{
                    width: 100px;
                }
                .iconguanbi{
                    font-size: 24px;
                    color: $mainFontColor;
                }
            }
            .role-info{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .role-text{
                    width: 200px;
                }
                .text-two{
                    margin-left: 20px;
                }
            }
            .role-list{
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .select-rolenav{
                    flex: 1;
                    margin-left: 20px;
                }
            }
            .subroule{
                width: 100%;
                margin-top: 50px;
            }
        }
     }
</style>