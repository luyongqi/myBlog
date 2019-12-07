<template>
    <div class="nav-select-role">
        <!-- 角色授权的页面 -->
         <el-cascader
         v-model="resetArray"
        :options="options"
        :props="objprops"
        collapse-tags
        clearable
        @change="changFn"
        >
        </el-cascader>

    </div>
</template>

<script>
import {mapState} from 'vuex'
import {setDataToRoute} from '@/utils/common'
import {flat,throttle} from '@/utils/common'
import {setRoleNavNew,getRoleNavNew} from '@/api/role.js'
export default {
    data(){
        return{
            objprops: { multiple: true },
            resetArray:[], //初始化的菜单
            sendArray:[], //需要发送给后台的数据
        }
    },
    props:{
        isRole:{
            type:Number,
            default:0,
        },
        roleData:{
            type:[String,Object],
            default:"",
        }
    },
    watch:{
        resetArray:{
            handler(newstr){
                console.log(newstr,'新选择的值')
            },
            deep:true
        },
        //防抖监听
        isRole:throttle(function(newstr){

            if(this.sendArray.length<=0){
                this.$api.message({
                    message:'请选择要授权的菜单',
                    type:'warning',
                    duration:1500,
                })
                return;
            }

            //调用授权接口
            console.log(this.roleData,'获取到的菜单信息')
            let data = {
                roleId:this.roleData.roleId, //角色的id
                menuIds:this.sendArray, //角色授权的菜单
            }
            console.log(data,'需要发送的授权信息')
            
            setRoleNavNew(data).then(res=>{
                this.$api.message({
                    message:'角色授权成功',
                    type:'success',
                    duration:1500,
                })
            })
            //隐藏弹出框
            setTimeout(()=>{
                this.$emit('shandowHidden')
            },2000)
            
        },3000,1),
    },
    computed:{
        ...mapState([
            'navTop'
        ]),
        options(){
            if(this.navTop.navTopListAll.length>0){
                //任何用到此数据的地方都需要判断 因为此数据是异步获取的
                let list=this.$api.cloneDeep(this.navTop.navTopListAll)

                list.forEach(item => {
                    item.value=item.menuId; //适配value值;
                    item.label=item.menuName; //适配label值;
                });
                list = setDataToRoute(list)
                console.log('我需要的选择的值',list)
                return list
            }
        }
    },
    methods:{
        changFn(data){
            //当菜单联动选择节点发生变化时
            console.log(data,'发生变化后的data');
            let dataNew = Array.from(new Set(flat(data))); //获取到的一维数组去重后传入后台
            this.sendArray = dataNew;
        }
    },
    created(){
        //将授权成功的数据初始化进入级联组件
        console.log(this.roleData.roleId,'初始化需要的id')
        getRoleNavNew({
            roleId:this.roleData.roleId, //角色的id
        }).then(res=>{
            let data = res.data; //获取到的菜单列表
            this.sendArray = data; //初始化需要发送给后台的数据
            let list=this.$api.cloneDeep(this.navTop.navTopListAll) 
            let listNew  = [];
            list.forEach(itemone=>{
                if(data.indexOf(itemone.menuId)!=-1){
                    listNew.push(itemone)
                }
            })
            listNew = setDataToRoute(listNew)
            //下面将listNew数组 转换为element组件需要的数据
            let resetList = []; //初始化的数据
            listNew.forEach(itemOne=>{
                if(itemOne.children){
                    itemOne.children.forEach(itemTwo=>{
                        if(itemTwo.children){
                            itemTwo.children.forEach(itemThree=>{
                                if(itemThree.children){

                                }else{
                                    resetList.push([itemOne.menuId,itemTwo.menuId,itemThree.menuId])
                                }
                            })
                        }else{
                            resetList.push([itemOne.menuId,itemTwo.menuId])
                        }
                    })
                }else{
                   resetList.push([itemOne.menuId]); //添加第一个数组进入初始化数据中
                }
            });

            console.log(resetList,'这里是最后得到数组,初始化显示用的')
            this.resetArray = resetList; //初始化显示用的
        })


    }
}



</script>

<style scoped lang="scss">
    .el-cascader{
        width: 100% !important;
    }

</style>