// import Cookies from 'js-cookie'

const navTop = {
  state: {
    currentPath:'', //当前所选的顶级菜单的路径path
    navTopList:[], //这里是头部菜单(route结构)
    navTopListAll:[], //这里是所有菜单的集合
    navTopListSelect:[], //下拉选择框菜单结构
    navTopChange:0, //顶部菜单是否发生了修改
  },
  mutations: {
    setCurrentPath(state,{currentPath}){
      state.currentPath=currentPath; 
    },//设置当前所选顶级菜单的路径 
    setNavTopList(state,{list}){
      state.navTopList=list;
    },//将有route结构的菜单存入store
    setNavTopListAll(state,{list}){
      console.log(list,'store里面的list')
      state.navTopListAll=list;
    },//没有route结构的菜单存入store
    setNavTopListSelect(state,{list}){
      console.log(list,'store里面的list12323')
      state.navTopListSelect=list;
    },//将具有下拉选择框所需属性的数据结构传入
    setNavTopChange(state){
      state.navTopChange++;
    }
  },
  actions: {
    
  }
}

export default navTop
