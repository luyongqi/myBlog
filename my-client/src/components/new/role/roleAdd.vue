<template>
    <div class="role-add" v-if="isBlock">
        <el-card class="mycard" shadow="hover">
            <div slot="header" class="title">
                <span class="title-left">{{isAdd?'添加':'修改'}}</span>
                <i  class="iconfont iconguanbi" @click="hiddenFn"></i>
            </div>
            <el-form
                :model="formInfo"
                :rules="formRules"
            > 
                <el-form-item prop="roleCode" label="角色编码" label-width="80px">
                    <el-input type="text" v-model="formInfo.roleCode"></el-input>
                </el-form-item>
                <el-form-item prop="roleName" label="角色描述" label-width="80px">
                    <el-input type="text" v-model="formInfo.roleName"></el-input>
                </el-form-item>
                <el-form-item prop="roleType" label="角色类型" label-width="80px">
                    <el-select v-model="formInfo.roleType" placeholder="请选择活动区域">
                        <el-option :label="item.roleTypeText" :value="item.roleType" v-for="(item,index) in roleType" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="submitcss">
                    <el-button type="primary" class="submit" @click="addFn">{{isAdd?'确认添加':'确认修改'}}</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

import {addRoleNew} from '@/apiNew/role';
import {roleType} from '@/utils/base.js';
import {throttle} from '@/utils/common.js'
import {mapMutations} from 'vuex'

export default {
    data(){
        return{
            formInfo:{
               roleCode:'', //角色编码
               roleName:'', //角色描述
               roleType:'', //角色类型 
            },
            formRules:{
                roleCode:[
                    {required:true,message:'请输入角色编码',trigger:'blur'}
                ],
                roleName:[
                     {required:true,message:'请输入角色描述',trigger:'blur'}
                ],
                roleType:[
                     {required:true,message:'请选择角色类型',trigger:'blur'}
                ],
            },
            roleType, //类型映射
        }
    },
    props:{
        isAdd:{
            type:Boolean,
            default:true,
        },
        isBlock:{
            type:Boolean,
            default:false,
        },
        roleData:{
            type:[String,Object],
            default:''
        }
    },
    watch:{
        isBlock(){
            if(!this.isAdd){
                this.formInfo.roleCode=this.roleData.code; //初始化角色编码
                this.formInfo.roleName=this.roleData.descripe; //初始化角色描述
                this.formInfo.roleType=this.roleData.roleTypeNum; //初始化角色描述
            }else{
                this.formInfo.roleCode=''; //初始化角色编码
                this.formInfo.roleName=''; //初始化角色描述
                this.formInfo.roleType=''; //初始化角色类型
            }
        }
    },
    methods:{
        ...mapMutations([
            'roleListChangeAdd', //当修改或者添加完成后调用 通知其他组件 当前的列表发生了变化;
        ]),
        hiddenFn(){
            this.$emit('update:isBlock',false)
        },
        // 添加角色
        addFn:throttle(function(){
            if(!this.formInfo.roleType){
                this.$message({
                    message:'请选择角色类型',
                    type:'error',
                    duration:1500,
                });
                return;
            }
            let that = this;
            window.console.log(that.formInfo);
            window.console.log(this.roleData);
            let data = {...this.formInfo}
            if(!this.isAdd){
                data.roleId = this.roleData.roleId
            }
            //添加
            let p  = function(){
                return new Promise ((resolve)=>{
                    addRoleNew(data).then(res=>{
                        resolve(res)
                    })
                })
            }
            
            async function addRoleFn (){
                let result = await p()
                return result
            }
            
            addRoleFn().then(res=>{
                that.$emit('update:isBlock',false);
                that.$api.message({
                    message:that.isAdd?'新增角色成功':'修改角色成功',
                    type:'success',
                    duration:1500,
                })
                that.roleListChangeAdd();
            })
        },3000,1)
    },
}
</script>

<style lang="scss" scoped>
    .role-add{
        @include maxShandow
    }
    .mycard{
        width: 600px;
        @include shandowBox;
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
        .submit{
            margin-left: 80px;
            width: 480px;
        }
        .submitcss{
            margin-top: 40px;
        }
    }


</style>