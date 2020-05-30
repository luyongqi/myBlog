/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:57:24
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 17:43:12
 * @Descript: 后台管理系统 接口路由配置
 */ 
'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/article/addArticle', controller.admin.article.addArticle);

};