<template>
    <div class="register">
        <el-card class="login-form-layout">
            <!-- 卡片标题 -->
           <div slot="header" class="title">
               <span class="title-left">注册与登录</span>
               <el-button class="title-right" @click="changeComponent">去登录</el-button>
           </div>
            <div style="text-align: center">
                <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
            </div>
            <h2 class="title-top color-main">拈花一笑后台管理系统</h2>
            <!-- 卡片内容 注册的表单-->
            <el-form :model="formInfo" :rules="formInfoRules" ref="myForm">
                
                <el-form-item prop="loginName" label="注册账号" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.loginName"></el-input>
                </el-form-item>

                <el-form-item prop="password" label="注册密码" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="password" v-model="formInfo.password"></el-input>
                </el-form-item>

                <el-form-item prop="uName" label="姓名" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uName"></el-input>
                </el-form-item>

                <el-form-item prop="uSex" label="性别" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-radio-group v-model="formInfo.uSex">
                        <el-radio label="男">男</el-radio>
                        <el-radio label="女">女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item prop="uBirthday" label="出生日期" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-date-picker type="date" placeholder="选择日期" v-model="formInfo.uBirthday" style="width: 100%;"></el-date-picker>
                </el-form-item>

                <el-form-item prop="uJobtitle" label="职务" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uJobtitle"></el-input>
                </el-form-item>

                <el-form-item prop="uMobile" label="移动电话" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uMobile"></el-input>
                </el-form-item>

                <el-form-item prop="uBizphone" label="办公电话" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uBizphone"></el-input>
                </el-form-item>

                <el-form-item prop="uHomephone" label="家庭电话" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uHomephone"></el-input>
                </el-form-item>

                <el-form-item prop="uEmail" label="电子邮箱" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uEmail"></el-input>
                </el-form-item>

                <el-form-item prop="uWexin" label="微信号" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uWexin"></el-input>
                </el-form-item>

                <el-form-item prop="uQq" label="QQ号" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.uQq"></el-input>
                </el-form-item>

                <el-form-item prop="remarks" label="备注" label-position="left" label-width="100px" hide-required-asterisk="true">
                    <el-input type="textarea" v-model="formInfo.remarks"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="submit">立即注册</el-button>
                </el-form-item>

            </el-form>
        </el-card>

        <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
            <span>恭喜您,注册成功,立即去登录?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="rightGoLoginFn">确 定</el-button>
            </span>
        </el-dialog>


    </div>
</template>

<script>

import {registerNew} from '@/api/user'

export default {
    data(){
        return {
            formInfo:{
                loginName:'', //登录名称
                password:'',  //登录密码
                uName:'', //姓名
                uSex:'', //用户性别
                uBirthday:'', //用户出生日期
                uJobtitle:'', //用户的职务
                uMobile:'', //用户移动电话
                uBizphone:'', //用户办公电话
                uHomephone:'', //用户家庭电话
                uEmail:'', //用户电子邮箱
                uWexin:'', //用户微信号
                uQq:'', //用户QQ号
                remarks:'', //用户自定义备注
            }, //这是注册需要的数据对象
            formInfoRules:{
                loginName:{ required: true, message: '请输入注册账号', trigger: 'blur' },
                password:{  required: true, message: '请输入注册密码', trigger: 'blur'},
            },
            dialogVisible:false, //弹窗默认为false
        }
    },
    props:{
        showFlag:{
            type:Boolean,
            default:true,
        }
    },
    methods:{
        //提交注册事件
        onSubmit(){
            console.log('我执行了注册')

            this.$refs.myForm.validate(valid=>{
                if(valid){
                    console.log(this.formInfo,'这里是我获取到的所有信息')
                    console.log(this.formInfo.uBirthday)
                    this.formInfo.uBirthday = new Date(this.formInfo.uBirthday).getTime(); //处理出生日期为时间戳
                    this.formInfo.uBirthday = String(this.formInfo.uBirthday)
                    this.formInfo.uBirthday = "";
                    registerNew(this.formInfo).then(res=>{
                        console.log(res)
                        if(res.retCode=='000000'){
                            this.dialogVisible = true; //注册成功
                        }else{
                            this.$message.error(res.errInfo);   
                        }
                    })
                }else{
                    this.$message({
                        message: '请检查页面错误信息提示,重新输入后再行注册',
                        type: 'warning'
                    });
                }
            })

        },
        changeComponent(){
            this.$emit('update:showFlag',!this.showFlag)
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        rightGoLoginFn(){
            this.dialogVisible=false;
            location.reload()
        }
    },
}
</script>

<style scoped lang="scss">

    .register{
        width: 100%;
        position: absolute;
        left: 0;right: 0;
        top: 180px;
        margin: 0 auto;
        border-bottom: 100px solid transparent;

        .login-form-layout {
            width: 800px;
            margin: 0 auto;
            border-top: 10px solid #409EFF;
            .title-top{
                text-align: center;
                margin-bottom: 50px;
            }
            .title{
                overflow: hidden;
                position: relative;
                .title-left{
                    float: left;
                    font-size: $fontSizeBase;
                    position: absolute;
                    top:50%;
                    transform: translateY(-50%);
                }
                .title-right{
                    float: right;
                    font-size: $fontSizeBase;
                }
            }
            .submit{
                width: 300px;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                margin-top: 40px;

            }
        }


    }
</style>