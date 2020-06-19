/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:57:24
 * @LastEditors: your name
 * @LastEditTime: 2020-06-19 16:05:19
 * @Descript: 后台管理系统 接口路由配置
 */ 
'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/article/addArticle', controller.admin.article.addArticle);   //添加文章
  router.get('/admin/article/getArticle', controller.admin.article.getArticle);    //获取文章

  router.post('/admin/article/addCategory', controller.admin.articleCategory.addCategory);    //添加文章分类
  router.get('/admin/article/getAllCategory', controller.admin.articleCategory.getAllCategory);    //获取文章分类列表
  router.post('/tools/savecover', controller.admin.uploadImg.saveCover); //上传图片
};