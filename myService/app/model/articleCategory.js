/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:04:59
 * @LastEditors: your name
 * @LastEditTime: 2020-06-18 10:56:48
 * @Describe: 文章分类模型
 */ 

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    // 建立文章模型
    const CategorySchema = new Schema({
        categoryName:{ type: String,default: '全部分类', required: true },       //分类名称
        rank:{ type: Number, default: 0 },                                      //排序
        supCategory:{ type: String, default: '' },                              //上级分类id
        linkSrc:{ type: String, default: '', required: true },                  //链接地址
        categoryIntro:{ type: String, default: '', required: true },            //分类简介
        coverImg:{type: String, default: ''},                                   //封面图片
        createTime: { type: Number, default:Date.now() },                       //创建时间
        updateTime: { type: Number, default:Date.now() },                       //更新时间
    })

    return mongoose.model('Category', CategorySchema,'category');
}
