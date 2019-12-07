//跟角色相关的api

import request from '@/utils/request';
import {baseApi} from '@/utils/base';

//增加角色
export function addRoleNew (data){
    return request({
        url:baseApi+'/v1/bm/role/save',
        method:'POST',
        data
    })
}

//获取角色列表
export function getRoleListNew (){
    return request({
        url:baseApi+'/v1/bm/role/all',
        method:'POST',
    })
}

//新增或修改角色授权
export function setRoleNavNew (data){
    return request({
        url:baseApi+'/v1/bm/roleMenu/batchSave',
        method:'POST',
        data,
    })
}

//初始化角色授权的内容
export function getRoleNavNew (data){
    return request({
        url:baseApi+'/v1/bm/roleMenu/findMenuIdsByRoleId',
        method:'POST',
        data,
    })
}

