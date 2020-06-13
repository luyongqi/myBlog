/*
 * @Author: 卢勇其
 * @Date: 2020-06-13 11:59:56
 * @LastEditors: your name
 * @LastEditTime: 2020-06-13 12:56:17
 */ 
import Loadable from 'react-loadable'         //路由懒加载
import Loading from '../components/Loading'

const Login = Loadable({                           //登录
    loader:()=>import('./Login'),
    loading: Loading
})
const NotFound = Loadable({                       //404
    loader:()=>import('./NotFound'),
    loading: Loading
})
const Home = Loadable({                     //工作台
    loader:()=>import('./Home'),
    loading: Loading
})
const AddArticle = Loadable({                     //添加文章
    loader:()=>import('./article/AddArticle'),
    loading: Loading
})
const EditArticle = Loadable({                    //编辑文章
    loader:()=>import('./article/EditArticle'),
    loading: Loading
})
const ArticleCategory = Loadable({                    //文章分类
    loader:()=>import('./article/ArticleCategory'),
    loading: Loading
})

const ArticleList = Loadable({                    //文章列表
    loader:()=>import('./article/ArticleList'),
    loading: Loading
})

const Tags = Loadable({                         //标签管理
    loader:()=>import('./article/Tags'),
    loading: Loading
})

const Comment = Loadable({                         //评论管理
    loader:()=>import('./article/Comment'),
    loading: Loading
})

const CarouselAd = Loadable({                         //轮播广告
    loader:()=>import('./CarouselAd'),
    loading: Loading
})

const PhotosCategory = Loadable({                         //相册分类
    loader:()=>import('./photos/PhotosCategory'),
    loading: Loading
})

const PhotosUpload = Loadable({                         //相册上传
    loader:()=>import('./photos/PhotosUpload'),
    loading: Loading
})

const PhotosLook = Loadable({                         //相册查看
    loader:()=>import('./photos/PhotosLook'),
    loading: Loading
})

const AboutMe = Loadable({                         //个人资料
    loader:()=>import('./AboutMe'),
    loading: Loading
})

const AccountManage = Loadable({                         //账号管理
    loader:()=>import('./AccountManage'),
    loading: Loading
})

const RemarkManage = Loadable({                         //留言管理
    loader:()=>import('./RemarkManage'),
    loading: Loading
})

const LogManage = Loadable({                         //留言管理
    loader:()=>import('./LogManage'),
    loading: Loading
})

const LinkManage = Loadable({                         //友情链接
    loader:()=>import('./LinkManage'),
    loading: Loading
})

const UserManage = Loadable({                         //用户管理
    loader:()=>import('./sys/UserManage'),
    loading: Loading
})

const RoleManage = Loadable({                         //角色管理
    loader:()=>import('./sys/RoleManage'),
    loading: Loading
})

const MenuManage = Loadable({                         //菜单管理
    loader:()=>import('./sys/MenuManage'),
    loading: Loading
})

export {
    Login,
    NotFound,
    Home,
    AddArticle,
    EditArticle,
    ArticleCategory,
    ArticleList,
    Tags,
    Comment,
    CarouselAd,
    PhotosCategory,
    PhotosUpload,
    PhotosLook,
    AboutMe,
    AccountManage,
    RemarkManage,
    LogManage,
    LinkManage,
    UserManage,
    RoleManage,
    MenuManage
}