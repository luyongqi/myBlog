/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-22 20:47:01
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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590147927642_440';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1/example',
    options: {},
    plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
  };
  
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  return {
    ...config,
    ...userConfig,
  };
};
