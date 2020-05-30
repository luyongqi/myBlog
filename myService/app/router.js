/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 17:09:02
 * @Description: file content
 */ 
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/admin')(app)
  require('./router/client')(app)
};
