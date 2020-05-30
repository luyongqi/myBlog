/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:04:59
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 16:12:15
 * @Describe: 文章分类模型
 */ 

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    // 建立文章模型
    const CategorySchema = new Schema({
        typeName:{ type: String, required: true },       //类型名称
        rank:{ type: Number, default: 0 }            //排序
    })

    return mongoose.model('Category', CategorySchema,'category');
}
