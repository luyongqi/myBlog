/*
 * @Author: 卢勇其
 * @Date: 2020-06-18 11:04:33
 * @LastEditors: your name
 * @LastEditTime: 2020-06-18 17:24:00
 */ 
'use strict';

const Service = require('egg').Service;

class ArticleCategoryService extends Service {
   
    async getAllCategory() {         //获取所有分类 (get请求)
        const query = this.ctx.query;
        const result = await this.ctx.model.ArticleCategory.find({});
        return result;
    }

    async addCategorys() {           //添加文章分类 （post请求）
        let query = this.ctx.request.body
        const user = new this.ctx.model.ArticleCategory(query)
        user.save();
    }
    
    async updateArticle() {        //修改文章分类
        const result = await this.ctx.model.ArticleCategory.updateOne({
            "_id":"5eca2324ab4d7d326839c253"
        },{
            password:"a1234"
        });
        return result
    }

}

module.exports = ArticleCategoryService;