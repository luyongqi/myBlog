/*
 * @Author: 卢勇其
 * @Date: 2020-06-19 11:49:48
 * @LastEditors: your name
 * @LastEditTime: 2020-06-19 16:36:24
 */ 
  
'use strict';
 
const Service = require('egg').Service;
const path = require("path");
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');
 
class ToolsService extends Service {
  /**
   * 获取文件上传目录
   * @param {*} filename
   */
async getUploadFile(filename) {
    // 1.获取当前日期
    let day = sd.format(new Date(), 'YYYYMMDD');
    // 2.创建图片保存的路径
    let dir = path.join(this.config.uploadDir, day);
    await mkdirp(dir); // 不存在就创建目录
    let date = Date.now(); // 毫秒数
    // 返回图片保存的路径
    let uploadDir = path.join(dir, date + path.extname(filename));
    // app\public\avatar\upload\20200312\1536895331666.png
    return {
      uploadDir,
      // saveDir: this.ctx.origin + uploadDir.slice(10).replace(/\\/g, '/') 
      saveDir: uploadDir.slice(10).replace(/\\/g, '/')
    }
  }
}
 
module.exports = ToolsService;