/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:17:10
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 16:31:47
 *  @Describe: 文章标签模型
 */ 

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    // 建立文章模型
    const TagSchema = new Schema({
        tagName:{ type: String, required: true },       //标签名称
        isShow:{ type: Boolean, default: false },       //默认不展示
        rank:{ type: Number, default: 0 }            //排序
    })

    return mongoose.model('Tag', TagSchema,'tag');
}