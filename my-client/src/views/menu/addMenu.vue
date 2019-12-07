<template>
    <div class="add-menu">
        <!-- 新增或修改菜单 -->
        <add-nav></add-nav>
    </div>
</template>

<script>
import {addAlretMenu} from '@/apiNew/menu';
import addNav from '@/components/new/navTop/addNav.vue'
export default {
    data(){
        return{
            
        }
    },
    components:{
        addNav,
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    .add-menu{
        width: 100%;
        overflow: hidden;
        
    }
</style>