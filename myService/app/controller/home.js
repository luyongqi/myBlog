/*
 * @Author: 卢勇其
 * @Date: 2020-05-22 19:45:39
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-24 15:15:17
 * @Description: file content
 */ 


'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
