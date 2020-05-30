/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:57:36
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 17:02:06
 * @用户端 接口路由配置
 */ 
'use strict';

module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/api/findUser', controller.user.findUser);
    router.get('/addUser', controller.user.addUser);
    router.get('/updateUser', controller.user.updateUser);
    router.get('/deleteUser', controller.user.deleteUser);
};