/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:57:24
 * @LastEditors: your name
 * @LastEditTime: 2020-06-30 17:11:12
 * @Descript: 后台管理系统 接口路由配置
 */ 
'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/article/addArticle', controller.admin.article.addArticle);   //添加文章
  router.get('/admin/article/getArticleList', controller.admin.article.getArticleList);    //获取文章列表
  router.get('/admin/article/getArticleById', controller.admin.article.getArticleById);    //获取文章详情


  router.post('/admin/article/addCategory', controller.admin.articleCategory.addCategory);    //添加文章分类
  router.post('/admin/article/updateCategory', controller.admin.articleCategory.updateCategory);    //修改文章分类
  router.get('/admin/article/getAllCategory', controller.admin.articleCategory.getAllCategory);    //获取文章分类列表
  router.post('/tools/savecover', controller.admin.uploadImg.saveCover); //上传图片
  router.post('/admin/tools/deleteImg', controller.admin.deleteImg.deleteImg); //删除图片

  router.get('/admin/album/getAlbumDir', controller.admin.album.getAlbumDir);    //获取静态图片目录
};