/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 22:27:12
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 11:17:38
 * @Description: file content
 */ 

import Loadable from 'react-loadable'         //路由懒加载
import Loading from '../components/Loading'

const Login = Loadable({                           //登录
    loader:()=>import('../Pages/Login'),
    loading: Loading
})
const NotFound = Loadable({                       //404
    loader:()=>import('../Pages/NotFound'),
    loading: Loading
})
const Home = Loadable({                     //工作台
    loader:()=>import('../Pages/Home'),
    loading: Loading
})
const AddArticle = Loadable({                     //添加文章
    loader:()=>import('../Pages/article/AddArticle'),
    loading: Loading
})
const EditArticle = Loadable({                    //编辑文章
    loader:()=>import('../Pages/article/EditArticle'),
    loading: Loading
})
const ArticleCategory = Loadable({                    //文章分类
    loader:()=>import('../Pages/article/ArticleCategory'),
    loading: Loading
})

const ArticleList = Loadable({                    //文章列表
    loader:()=>import('../Pages/article/ArticleList'),
    loading: Loading
})

const ArticleList = Loadable({                    //文章列表
    loader:()=>import('../Pages/article/ArticleList'),
    loading: Loading
})

const Tags = Loadable({                         //标签管理
    loader:()=>import('../Pages/article/Tags'),
    loading: Loading
})

const Comment = Loadable({                         //评论管理
    loader:()=>import('../Pages/article/Comment'),
    loading: Loading
})

const CarouselAd = Loadable({                         //轮播广告
    loader:()=>import('../Pages/CarouselAd'),
    loading: Loading
})

const PhotosCategory = Loadable({                         //相册分类
    loader:()=>import('../Pages/photos/PhotosCategory'),
    loading: Loading
})

const PhotosUpload = Loadable({                         //相册上传
    loader:()=>import('../Pages/photos/PhotosUpload'),
    loading: Loading
})

const PhotosLook = Loadable({                         //相册查看
    loader:()=>import('../Pages/photos/PhotosLook'),
    loading: Loading
})

const AboutMe = Loadable({                         //个人资料
    loader:()=>import('../Pages/AboutMe'),
    loading: Loading
})

const AccountManage = Loadable({                         //账号管理
    loader:()=>import('../Pages/AccountManage'),
    loading: Loading
})

const RemarkManage = Loadable({                         //留言管理
    loader:()=>import('../Pages/RemarkManage'),
    loading: Loading
})

const LogManage = Loadable({                         //留言管理
    loader:()=>import('../Pages/LogManage'),
    loading: Loading
})

const LinkManage = Loadable({                         //友情链接
    loader:()=>import('../Pages/LinkManage'),
    loading: Loading
})

const UserManage = Loadable({                         //用户管理
    loader:()=>import('../Pages/sys/UserManage'),
    loading: Loading
})

const RoleManage = Loadable({                         //角色管理
    loader:()=>import('../Pages/sys/RoleManage'),
    loading: Loading
})

const MenuManage = Loadable({                         //菜单管理
    loader:()=>import('../Pages/sys/MenuManage'),
    loading: Loading
})

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
        component:Home,
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
                component:Tags,
                title:'分类管理',
                icon:'profile',
            },
            {
                pathname:'/admin/article/tags',
                component:Comment,
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
        component:CarouselAd,
        title:'轮播广告',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/photos',
        title:'相册管理',
        exact:true,
        isNav:true,
        icon:'dot-chart',
        children:[
            {
                pathname:'/admin/photos/category',
                component:PhotosCategory,
                title:'相册分类',
                icon:'profile',
            },
            {
                pathname:'/admin/photos/upload',
                component:PhotosUpload,
                title:'相册上传',
                icon:'profile',
            },
            {
                pathname:'/admin/photos/look',
                component:PhotosLook,
                title:'相册查看',
                icon:'profile',
            },
        ] 
    },{
        pathname:'/admin/personal',
        component:AboutMe,
        title:'个人资料',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/account',
        component:AccountManage,
        title:'账号管理',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/remark',
        component:RemarkManage,
        title:'留言管理',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/log',
        component:LogManage,
        title:'日志管理',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/link',
        component:LinkManage,
        title:'友情链接',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/sys',
        title:'系统管理',
        exact:true,
        isNav:true,
        icon:'dot-chart',
        children:[
            {
                pathname:'/admin/sys/user',
                component:UserManage,
                title:'用户管理',
                icon:'profile',
            },
            {
                pathname:'/admin/sys/role',
                component:RoleManage,
                title:'角色管理',
                icon:'profile',
            },
            {
                pathname:'/admin/sys/menu',
                component:MenuManage,
                title:'菜单管理',
                icon:'profile',
            },
        ] 
    }

]