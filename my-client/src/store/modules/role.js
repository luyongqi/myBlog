import {getRoleListNew} from '@/api/role';
import {roleType} from '@/utils/base.js';

const role = {
    state: {
        roleList:[], //获取到的角色列表数据
        roleListChange:0, //当该数值发生改变的时候  就会将数字加一
    },
    mutations: {
        roleListChangeAdd(state){
            window.console.log('这里是改变了')
            state.roleListChange++
        },
        setRoleList(state,{list}){
            state.roleList = list; //将值存储state中
        }
    },
    actions: {
        getRoleList({commit}){
            return new Promise((resolve,reject)=>{
                getRoleListNew().then(res=>{
                    let list = res.data.map(item=>{
                        let obj = {};
                        obj.code = item.roleCode; //角色编码
                        obj.descripe = item.roleName; //角色描述
        
                        roleType.forEach(itemNew=>{
                            if(item.roleType==itemNew.roleType){
                                obj.roleType = itemNew.roleTypeText; //将角色类型映射为汉字展示
                            }
                        })
                        obj.roleTypeNum = item.roleType;
                        obj.roleId = item.roleId; //角色id
                        return obj;
                    })
                    commit('setRoleList',{list})
                    resolve(list)
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    }
  }

  export default role