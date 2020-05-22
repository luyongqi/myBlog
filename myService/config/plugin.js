/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-22 20:24:34
 * @Description: file content
 */ 
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose:{
    enable: true,
    package: 'egg-mongoose',
  }
};
