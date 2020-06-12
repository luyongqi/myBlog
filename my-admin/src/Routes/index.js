/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 22:27:12
 * @LastEditors: your name
 * @LastEditTime: 2020-06-12 17:54:45
 * @Description: file content
 */ 

import Login from '../Pages/login'
import NotFound from '../Pages/notFound'
import Workbench from '../Pages/workbench'
import AddArticle from '../Pages/article/AddArticle'
import EditArticle from '../Pages/article/EditArticle'


export const mainRouter = [
    {
        pathname:'/login',
        component:Login
    },{
        pathname:'/404',
        component:NotFound
    },
]

export const adminRouter = [
    {
        pathname:'/admin/home',
        component:Workbench,
        title:'工作台',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/article',
        component:Article,
        exact:true,
        title:'文章管理',
        isNav:true,
        icon:'profile',
        children:[
            {
                pathname:'/admin/article/add',
                component:AddArticle,
                title:'添加文章',
                icon:'profile',
            },
            {
                pathname:'/admin/article/edit/:id',
                component:EditArticle,
                title:'编辑文章',
                icon:'profile',
            },
            {
                pathname:'/admin/article/list',
                component:ArticleList,
                title:'文章列表',
                icon:'profile',
            },
            {
                pathname:'/admin/article/category',
                component:AddArticle,
                title:'分类管理',
                icon:'profile',
            },
            {
                pathname:'/admin/article/tags',
                component:AddArticle,
                title:'标签管理',
                icon:'profile',
            },
            {
                pathname:'/admin/article/comment',
                component:AddArticle,
                title:'评论管理',
                icon:'profile',
            },
        ]
    },{
        pathname:'/admin/ad',
        component:Workbench,
        title:'轮播广告',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/photos',
        component:Workbench,
        title:'相册管理',
        exact:true,
        isNav:true,
        icon:'dot-chart',
        children:[
            {
                pathname:'/admin/photos/category',
                component:AddArticle,
                title:'相册分类',
                icon:'profile',
            },
            {
                pathname:'/admin/photos/upload',
                component:EditArticle,
                title:'相册上传',
                icon:'profile',
            },
            {
                pathname:'/admin/photos/look',
                component:EditArticle,
                title:'相册查看',
                icon:'profile',
            },
        ] 
    },{
        pathname:'/admin/personal',
        component:Workbench,
        title:'个人资料',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/account',
        component:Workbench,
        title:'账号管理',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/remark',
        component:Workbench,
        title:'留言管理',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/log',
        component:Workbench,
        title:'日志管理',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/link',
        component:Workbench,
        title:'友情链接',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/sys',
        component:Workbench,
        title:'系统管理',
        exact:true,
        isNav:true,
        icon:'dot-chart',
        children:[
            {
                pathname:'/admin/sys/user',
                component:AddArticle,
                title:'用户管理',
                icon:'profile',
            },
            {
                pathname:'/admin/sys/role',
                component:EditArticle,
                title:'角色管理',
                icon:'profile',
            },
            {
                pathname:'/admin/sys/menu',
                component:EditArticle,
                title:'菜单管理',
                icon:'profile',
            },
        ] 
    }

]