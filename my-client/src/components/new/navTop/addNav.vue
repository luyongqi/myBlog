<template>
    <div class="add-menu">
        <el-card class="mycard" shadow="hover">
            <div slot="header" class="title">
               <span class="title-left">添加或修改菜单</span>
               
           </div>
            <el-form
            :model="formInfo"
            :rules="formRules"
            label-position="left"
            label-width="100px"
            >
                <el-form-item prop="menuId" label="菜单ID">
                    <el-input type="text" v-model="formInfo.menuId" :disabled="navId?true:false"></el-input>
                </el-form-item>
                <el-form-item prop="toMenuId" label="上级菜单ID" v-if="!navId">
                    <el-input type="text" v-model="formInfo.toMenuId"></el-input>
                </el-form-item>
                <el-form-item prop="toMenuId" label="选择上级菜单" v-else>
                    <el-cascader
                    :options="list"
                    :props="{checkStrictly: true}"
                    filterable
                    clearable
                    @change="changeFn"
                    ></el-cascader>
                </el-form-item>
                <el-form-item prop="menuName" label="菜单名" hide-required-asterisk="true">
                    <el-input type="text" v-model="formInfo.menuName"></el-input>
                </el-form-item>
                <el-form-item prop="menuSrc" label="菜单路径">
                    <el-input type="text" v-model="formInfo.menuSrc"></el-input>
                </el-form-item>
                <el-form-item prop="menuIcon" label="菜单图标">
                    <el-input type="text" v-model="formInfo.menuIcon"></el-input>
                </el-form-item>
                <el-form-item prop="subpage" label="菜单子页面">
                    <el-input type="text" v-model="formInfo.subpage"></el-input>
                </el-form-item>
                <el-form-item prop="menuType" label="菜单类型">
                    <el-input type="text" v-model="formInfo.menuType"></el-input>
                </el-form-item>
                <el-form-item prop="menuSort" label="菜单顺序">
                    <el-input type="text" v-model="formInfo.menuSort"></el-input>
                </el-form-item>
                <el-form-item class="subbox" v-if="!navId">
                    <el-button type="primary" @click="onSubmit" class="submit submitleft">立即新增</el-button>
                </el-form-item>
                <el-form-item class="subbox" v-else>
                    <el-button type="primary" @[fnenvet]="onSubmit" class="submit submittwo">确认修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import {addAlretMenu} from '@/apiNew/menu';
import {mapState,mapMutations} from 'vuex';
import {getMenuList,getMenuListAll} from '@/api/menu';
import {setDataToRoute} from '@/utils/common'


export default {
    data(){
        return {
            formInfo:{
                menuId:'',   //菜单的id 修改时必填
                toMenuId:'', //上级菜单id 
                menuName:'', //菜单名
                menuSrc:'',  //菜单的路径
                menuIcon:'', //菜单图标
                subpage:'',  //子页面
                menuType:'', //菜单类型
                menuSort:'', //菜单顺序号
            },
            formRules:{
                menuName:{required: true, message: '请输入菜单名称', trigger: 'blur' }
            },
            fnenvet:'click',
        }
    },
    props:{
        navId:{
            type:String,
            default:'',
        }, //获取到的navId
    },
    computed:{
        ...mapState([
            'navTop',//获取菜单
        ]),
        list(){
            if(this.navTop.navTopListSelect.length>0){
                //防止异步数据报错
                let list = this.$api.cloneDeep(this.navTop.navTopListSelect); //得到一个新的数据然后处理
                list.forEach(item=>{
                    if(item.children){
                        item.children.forEach(itemnew=>{
                            if(itemnew.children){
                                delete itemnew.children
                            }
                        })
                    }
                })
                return list;
            }else{
                return [];
            }
        }, //得到表单中可以选择的上级菜单
    },
    watch:{
        'navId'(newNavId){
            console.log(newNavId,'新值')
            let that = this;
            //当菜单存在的时候(防止用户刷新后store清空了导致报错)
            if(this.navTop.navTopListAll.length>0){
                let itemCurrent = null; //当前菜单
                let itemFather = null; //子菜单
                this.navTop.navTopListAll.forEach(item=>{
                    if(item.menuId==newNavId){
                        itemCurrent=item
                    }
                })
                // this.navTop.navTopListAll.forEach(item=>{
                //     if(itemCurrent.toMenuId==item.menuId){
                //         itemFather = item
                //     }
                // })
                console.log({
                    itemCurrent,
                    itemFather,
                },'当前的菜单和父级菜单') 

                this.formInfo.menuId = itemCurrent.menuId
                this.formInfo.toMenuId = itemCurrent.toMenuId
                this.formInfo.menuName = itemCurrent.menuName
                this.formInfo.menuSrc = itemCurrent.menuSrc
                this.formInfo.menuIcon = itemCurrent.menuIcon
                this.formInfo.subpage = itemCurrent.subpage
                this.formInfo.menuType = itemCurrent.menuType
                this.formInfo.menuSort = itemCurrent.menuSort
            }   
        },
    },
    methods:{
        ...mapMutations([
            'setNavTopList', //存储所有的菜单(有route结构)
            'setNavTopListAll', //存储所有的菜单(没有route结构)
            'setNavTopChange', //发出菜单已经改变的信号
        ]),
        //新增菜单
        onSubmit(){
            console.log(this.formInfo)
            addAlretMenu(this.formInfo).then(res=>{
                console.log(res,'这里是新增和修改的接口')
               
                if(res.retCode=='000000'){
                    
                    this.$api.message({
                        message:'修改成功',
                        type: 'success',
                        duration: 1.5 * 1000
                    })

                    let that = this;
                    getMenuListAll().then(res=>{
                    
                        let list =this.$api.cloneDeep(res.data); //这里是获取到的所有的菜单

                        that.setNavTopListAll({list:res.data}); //将获取到的菜单数据存入store

                        //此处需要我们写方法 通过获取到的数据 组成路由般的数据结构
                        let navList = setDataToRoute(list)

                        console.log(navList,'这里是获取好的分级的路由')
                        // that.name = that.$route.matched[0].name; //初始化该显示的菜单
                        // that.setCurrentPath({currentPath:this.name}); 


                        that.setNavTopList({list:navList}); //将router结构的菜单存入store

                        that.setNavTopChange(); //菜单已修改

                        console.log(that.navTop,'state的值')

                    })




                }
            })
        },
        //修改菜单
        onAlret(){
            addAlretMenu(this.formInfo).then(res=>{
                console.log(res,'这里是新增和修改的接口')
            })
        },
        //选择的菜单
        changeFn(data){
            console.log(data,'选择的菜单')
            let navId = data[data.length-1]
            this.formInfo.toMenuId = navId; //上级id
        }
    },
}
</script>

<style lang="scss" scoped>
    .mycard{
        width: 600px;
        margin: 50px auto;
        .title{
            overflow: hidden;
            position: relative;
            .title-left{
                float: left;
                font-size: 16px;
                color: $colorBase;
            }
            
        }
        .subbox{
            margin-top: 50px;
            .submit{
                width: 200px;
            }
            //当时修改的时候出现
            .submittwo{
                width: 400px;
            }
            .submitleft{
                float: left;
            }
            .submitright{
                float: right;
            }
        }    
    }
</style>