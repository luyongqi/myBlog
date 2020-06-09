/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 16:43:29
 * @LastEditors: your name
 * @LastEditTime: 2020-06-09 15:27:41
 */ 
'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
   
    async getArticleDetail() {         //获取文章详情 (get请求)
        const query = this.ctx.query;
        const result = await this.ctx.model.Article.find({});
        return result;
    }

    async addArticles() {           //添加文章 （post请求）
        let query = this.ctx.request.body
        const user = new this.ctx.model.Article(query)
        user.save();
    }

    async updateArticle() {        //更新文章
        const result = await this.ctx.model.Article.updateOne({
            "_id":"5eca2324ab4d7d326839c253"
        },{
            password:"a1234"
        });
        return result
    }

}

module.exports = ArticleService;