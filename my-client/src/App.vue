<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
#app {
  width: 100%;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  color: #2c3e50;
  background: #E9EAED;
  line-height: 1.5;
  .el-card__header {
    padding: 10px 0;
  }
  // 分页 上一页、下一页按钮最小宽度调整
  .el-pagination span:not([class*=suffix]) {
    min-width: 70px;
  }

   // 请求 menu 菜单下边框
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border: none;
  }
  .tabbox {
    .el-tabs__item {
      font-size: 16px;
    }
  }
}
</style>
