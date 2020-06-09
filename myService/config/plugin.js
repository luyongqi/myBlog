/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: your name
 * @LastEditTime: 2020-06-09 14:40:16
 * @Description: file content
 */ 
'use strict';

// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};