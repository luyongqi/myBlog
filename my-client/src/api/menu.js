//跟菜单相关的api

import request from '@/utils/request';
import {baseApi} from '@/utils/base';

//根据权限获取菜单
export function getMenuList(){
    return request({
        url:baseApi+'/v1/bm/menu/allByAuth',
        method:'POST',
    })
}

//获取所有的菜单
export function getMenuListAll(){
    return request({
        url:baseApi+'/v1/bm/menu/all',
        method:'POST',
    })
}

export function addAlretMenu(data){
    return request({
        url:baseApi+'/v1/bm/menu/save',
        method:'POST',
        data,
    })
}