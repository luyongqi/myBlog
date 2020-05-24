/*
 * @Author: 卢勇其
 * @Date: 2020-05-24 13:48:00
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-05-24 15:13:43
 * @Description: file content
 */ 
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    const UserSchema = new Schema({
      userName: { type: String  },
      password: { type: String  },
    });
   
    return mongoose.model('User', UserSchema,'user');
  }