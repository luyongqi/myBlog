<template>
    <div>
        <el-table border  fit :data="role.roleList" @selection-change="selectChangeFn">
            <el-table-column type="selection" width="55" fixed></el-table-column>
            <el-table-column type="index" width="80" fixed label="序号"></el-table-column>
            <el-table-column fixed label="角色编码" width="250" prop="code"></el-table-column>
            <el-table-column fixed label="角色描述"  prop="descripe"></el-table-column>
            <el-table-column fixed label="角色类型"  prop="roleType" width="100"></el-table-column>
            <el-table-column
            fixed="left"
            label="操作"
            width="300">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="editRowFn(0,scope.row)">修改</el-button>
                    <el-button type="text" size="small" @click="editRowFn(1,scope.row)">菜单授权</el-button>
                    <el-button type="text" size="small" @click="editRowFn(2,scope.row)">清除用户授权</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {getRoleListNew} from '@/api/role';
import {roleType} from '@/utils/base.js';
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    watch:{
        'role.roleListChange'(strnew){
            this.getRoleList()
        }
    },
    computed:{
        ...mapState([
            'role'
        ])
    },
    methods:{
        ...mapActions([
            'getRoleList', //得到列表
        ]),
        //选择某一项
        selectChangeFn(data){
            window.console.log(data,'改变选择')
        },
        //修改某一项
        editRowFn(type,data){
            window.console.log('我在发出事件')
            switch(type){
                case 0:
                    //修改
                    window.console.log('我在发出事件1')
                    this.$emit('editRowFn',0,data)
                break;
                case 1:
                    //菜单授权
                    window.console.log('我在发出事件2')
                    this.$emit('editRowFn',1,data)
                break;
                case 2:
                    //清除菜单授权
                    window.console.log('我在发出事件3')
                    this.$emit('editRowFn',2,data)
                break;
                case 3:
                    //删除
                    window.console.log('我在发出事件4')
                    this.$emit('editRowFn',3,data)
                break;
                default:
                    //不做操作
                break;
            }
        },
    },
    mounted(){
        this.getRoleList();
    }
}
</script>

<style scoped lang="scss">

</style>