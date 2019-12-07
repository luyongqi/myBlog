<template>
    <div class="menu-position">
        <div class="position-title">
            选择您要修改的菜单
        </div>
        <div class="position-list">
            <nav-select :navId.sync="navId"></nav-select>
        </div>
        <!-- 修改菜单 -->
        <transition
            enter-active-class="animated bounceInRight" 
        >
            <add-nav v-show="navId" :navId="navId"></add-nav>
        </transition>
    </div>
</template>

<script>

    import navSelect from '@/components/new/navTop/navSelect.vue';
    import addNav from '@/components/new/navTop/addNav.vue'

    export default {
        data(){
            return{
                navId:'', //选中的navId
            }
        },
        watch:{
            navId(strNew){
                
            },
        },
        components:{
            navSelect, //菜单选择器
            addNav, //菜单修改
        }
    }
</script>

<style lang="scss" scoped>
    .menu-position{
        width: 100%;
        overflow: hidden;
        padding-bottom: 50px;
        .position-title{
            margin-top: 30px;
            margin-left: 30px;
            color: $mainFontColor;
        }
        .position-list{
            margin-top: 30px;
            margin-left: 30px;
        }
    }
</style>