/*
 * @Author: 卢勇其
 * @Date: 2020-05-25 15:02:28
 * @LastEditors: your name
 * @LastEditTime: 2020-06-29 17:55:31
 */ 
import instance  from '../axios'

const prefix = 'admin'

//图片管理
export const deleteImg =(data) => instance.post(`/${prefix}/tools/deleteImg`, data)            //获取分类列表

// 文章管理
export const addArticle = (data) => instance.post(`/${prefix}/article/addArticle`, data)     //添加文章
export const getArticleList = (_id) => instance.get(`/${prefix}/article/getArticleList`) // 获取文章详情
export const getArticleById = (_id) => instance.get(`/${prefix}/article/getArticleById/${_id}`) // 获取文章详情

// 文章分类管理
export const addCategory = (data) => instance.post(`/${prefix}/article/addCategory`, data)     //添加文章分类
export const getAllCategory =() => instance.get(`/${prefix}/article/getAllCategory`)            //获取分类列表
export const updateCategory =(data) => instance.post(`/${prefix}/article/updateCategory`,data)         //修改文章分类

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