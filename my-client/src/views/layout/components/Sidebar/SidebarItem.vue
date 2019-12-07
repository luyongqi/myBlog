<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">

      <router-link v-if="!item.children" :to="{name:item.name}"
        :key="item.name">
        <el-menu-item :index="item.name" :class="{'submenu-title-noDropdown':!isNest}">
          <i v-if="item.meta&&item.meta.icon" :class="'iconfont '+item.meta.icon"></i>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
      
      

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <i v-if="item.meta&&item.meta.icon"  :class="'iconfont '+item.meta.icon"></i>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children">
          <sidebar-item :is-nest="true" class="nest-menu"  v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="{name:child.name}" :key="child.name">
            <el-menu-item :index="child.name">
              <i v-if="child.meta&&child.meta.icon"  :class="'iconfont '+item.meta.icon"></i>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template> 
      </el-submenu>

    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    ...mapState([
      'navTop'
    ])
  },
  methods: {
    // hasOneShowingChildren(children) {
    //   const showingChildren = children.filter(item => {
    //     return !item.hidden
    //   })
    //   if (showingChildren.length === 1) {
    //     return true
    //   }
    //   return false
    // }
  }
}
</script>

<style lang="scss" scoped>
  .iconfont{
    margin-right: 5px;
  }
</style>
