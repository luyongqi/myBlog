/*
 * @Author: 卢勇其
 * @Date: 2020-06-18 11:04:33
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-06-18 22:28:14
 */ 
'use strict';

const Service = require('egg').Service;

class ArticleCategoryService extends Service {
   
    async getAllCategory() {         //获取所有分类 (get请求)
        const query = this.ctx.query;
        const res = await this.ctx.model.ArticleCategory.find({});
       
        return res
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