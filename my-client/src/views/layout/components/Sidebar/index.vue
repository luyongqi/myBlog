<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.name"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters , mapState } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapState([
      'navTop',
    ]),
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      //这里的数组也替换成获取到的数组

      let topPath = this.navTop.currentPath;

      console.log(topPath,'当前的路径')

      let list = this.navTop.navTopList;
      let listNew = []; //这里放当前菜单的子菜单
      list.forEach((item,index)=>{
        if(item.name==topPath){
          listNew=item.children?item.children:[]
        }
      })
      // console.log(this.$router.options.routes,'这里是处理后的item')
      // return this.$router.options.routes;

      return listNew; //返回处理后的路径

    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created(){
    
  },
}
</script>
