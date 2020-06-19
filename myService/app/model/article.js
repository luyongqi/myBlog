/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 14:49:59
 * @LastEditors: your name
 * @LastEditTime: 2020-06-19 11:42:15
 * @Describe: 文章模型
 */ 
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    // 建立文章模型
    const ArticleSchema = new Schema({
        articleTitle:{ type: String, required: true },   //标题
        articleContent: { type: String, required: true  },         //内容
        introducemd: { type: String, required: true },         //简介
        createTime: { type: Number, default:Date.now() },  //创建时间
        updateTime: { type: Number, default:Date.now() },  //更新时间
        imgUrl: { type: String },                   //封面图
        isCarousel:{ type: Boolean, default:false }, //是否展示在首页轮播上
        recommendType:{ type: String, default:'1' },   //推荐的类型 1-特别推荐 2-站长推荐
        lookCount: { type: Number, default:0 },  //浏览量
        category:{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'},          //文章分类
        comments:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Comment'  } ],     //评论列表
        tags:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Tag'  } ],     //文章关键词 即 标签
        stickRank: { type: Number, default: 0 }        //置顶级别  数字越大越靠前
    })

   
    return mongoose.model('Article', ArticleSchema,'article');
}