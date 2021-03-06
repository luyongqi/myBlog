/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: your name
 * @LastEditTime: 2020-06-19 15:05:13
 * @Description: file content
 */ 
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */


module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const path = require('path')
  
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590147927642_440';

  // add your middleware config here
  config.middleware = [];

  // egg 默认开启防止 xss 攻击 和 csrf 攻击
  config.security= {
    csrf : {
      enable: false,
      // headerName: 'x-csrf-token',           // 自定义请求头
    },
    domainWhiteList: ['http://localhost:3000']
  };

  config.cors = {
     origin:'*',
     allowMethods:'GET,HEAD,POST,DELETE,PATCH,OPTIONS'
  };

  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/', 
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };
  
  config.mongoose = {
    url: 'mongodb://127.0.0.1/blogDB',
    options: {},
    // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
  };
  config.uploadDir = 'app/public/admin/upload'; //后台图片上传目录
  
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',     
  };
  
  return {
    ...config,
    ...userConfig,
  };
};
