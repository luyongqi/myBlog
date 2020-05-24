/*
 * @Author: 卢勇其
 * @Date: 2020-05-24 15:11:24
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-24 15:28:30
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
        "_id":"5c00f0ce862e9227acb56d22"
    },{
        password:"cccccccccc"
    });
    return result
  }

  async deleteUser(){
    const result = await this.ctx.model.User.deleteOne({
        "_id":"5c00f0ce862e9227acb56d22"
    });
    return result
  }
}

module.exports = UserService;