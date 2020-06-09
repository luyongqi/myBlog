/*
 * @Author: 卢勇其
 * @Date: 2020-05-25 15:02:28
 * @LastEditors: your name
 * @LastEditTime: 2020-06-09 14:55:35
 */ 
import instance  from '../axios'

const prefix = 'admin'

// 文章管理
export const addArticle = (data) => instance.post(`/${prefix}/article/addArticle`, data)     //添加文章
export const getArticleDetail = (_id) => instance.get(`/${prefix}/article/getArticleDetail/${_id}`) // 获取文章详情


// 角色管理
export const fetchRoleList = (data) =>  instance.post(`/${prefix}/role/list`, data) // 角色列表
export const fetchRoleAdd = (data) =>  instance.post(`/${prefix}/role/save`, data) // 保存角色
export const fetchRoleUpdate = (data) =>  instance.post(`/${prefix}/role/update`, data) // 角色编辑
export const fetchRoleDetail = (data) =>  instance.post(`/${prefix}/role/detail`, data) // 已选择的菜单以及按钮
export const fetchRoleDelete = (data) =>  instance.post(`/${prefix}/role/delete`, data) // 删除角色
export const fetchModuleListInRole = (data) =>  instance.post(`/${prefix}/role/resList`, data) // 已选择的模块
export const fetchUpdateRoleRes = (data) =>  instance.post(`/${prefix}/role/updateRes`, data) // 更新已选择的模块

export const fetchRoleDeletePeople = (data) =>  instance.post(`/${prefix}/user/removeRole`, data)
export const fetchUpdateButton = (data) =>  instance.post(`/${prefix}/role/updateButton`, data)
export const fetchTreeList = (data) =>  instance.post(`/${prefix}/role/resTree`, data)

// 用户管理
export const fetchUserDepttList = (data) =>  instance.post(`/${prefix}/dept/list`, data) // 获取用户管理左侧分类列表
export const fetchUserList = (data) =>  instance.post(`/${prefix}/user/list`, data) // 获取用户列表
export const fetchUserDetail = (data) =>  instance.post(`/${prefix}/user/detail`, data) // 获取用户详情
export const fetchUserDetailUpdate = (data) =>  instance.post(`/${prefix}/user/update`, data) // 修改用户详情
export const fetchUserAdd = (data) =>  instance.post(`/${prefix}/user/save`, data) // 新增用户
export const synUser = (data) =>  instance.post(`/${prefix}/user/synUser`, data) // 同步用户
export const fetchUserSetRole = (data) =>  instance.post(`/${prefix}/user/updateRole`, data) // 修改用户角色
export const fetchUserDelete = (data) =>  instance.post(`/${prefix}/user/delete`, data) // 删除用户
export const fetchChangeUserStatus = (data) =>  instance.post(`/${prefix}/user/updateStatus`, data) // 设置用户是否冻结状态