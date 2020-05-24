/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-24 15:19:22
 * @Description: file content
 */ 
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/findUser', controller.user.findUser);
  router.get('/addUser', controller.user.addUser);
  router.get('/updateUser', controller.user.updateUser);
  router.get('/deleteUser', controller.user.deleteUser);
};
