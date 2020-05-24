/*
 * @Author: 卢勇其
 * @Date: 2020-05-24 15:11:24
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-24 19:37:26
 * @Description: file content
 */ 
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findUser() {
    const result = await this.ctx.model.User.find({});
    return result;
  }

  async addUser() {
    const user = new this.ctx.model.User({
        userName:"卢勇其",
        password:"123456"
    })
    user.save();
  }

  async updateUser() {
    const result = await this.ctx.model.User.updateOne({
        "_id":"5eca2324ab4d7d326839c253"
    },{
        password:"a1234"
    });
    return result
  }

  async deleteUser(){
    const result = await this.ctx.model.User.deleteOne({
        "_id":"5eca2324ab4d7d326839c253"
    });
    return result
  }
}

module.exports = UserService;