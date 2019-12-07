<template>
  <div>
    <!-- 背景图片 -->
    <img :src="login_center_bg" class="login-center-layout">

    <!-- 登录与注册组件 -->
    <transition name="fade" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <component :is="loginOrRegisterFlag?'loginComponent':'register'" :showFlag.sync="loginOrRegisterFlag"></component>
    </transition>

  </div>
</template>

<script>

  import login_center_bg from '@/assets/images/login_center_bg.png'; //图片背景
  import register from '@/components/new/loginRegister/register.vue'; //注册组件
  import loginComponent from '@/components/new/loginRegister/login.vue'; //登录组件

  export default {
    name: 'login',
    data() {
        return{
          login_center_bg, //背景图片
          loginOrRegisterFlag:true, //组件切换的flag 用来显示与隐藏登录和注册的
        }
    },
    watch:{
      loginOrRegisterFlag(strnew){
        console.log(strnew)
      }
    },
    components:{
      register,
      loginComponent,
    },
    created() {
      
    },
    methods: {
      changeLoginRegister(){
        this.loginOrRegisterFlag=!this.loginOrRegisterFlag; //切换登录和注册组件
      }
    }
  }
</script>

<style scoped lang="scss">

  .login-center-layout {
    background: $colorBase;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
  
</style>
