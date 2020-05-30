/*
 * @Author: 卢勇其
 * @Date: 2020-05-24 13:49:03
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 17:15:33
 * @Description: file content
 */ 

'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async findUser() {
        const res = await this.service.user.findUser();
        console.log(res)
        this.ctx.body = res;
    
      }

    async addUser(){
        const res =  await this.service.user.addUser();
        this.ctx.body = res;
    }

    async updateUser(){
        await this.service.user.updateUser();
        this.ctx.body = 'hi, egg';
    }

    async deleteUser(){
        await this.service.user.deleteUser();
        this.ctx.body = 'hi, egg';
    }
}

module.exports = UserController;