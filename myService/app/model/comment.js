/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:04:48
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 16:24:50
 * @Describe: 文章评论模型
 */ 

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    // 建立文章模型
    const CommentSchema = new Schema({
        userName:{ type: String, required: true },       //用户名称
        content:{ type: Number, default: 0 }            //评论内容
    })

    return mongoose.model('Comment', CommentSchema,'comment');
}