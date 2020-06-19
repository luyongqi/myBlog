/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 14:48:18
 * @LastEditors: your name
 * @LastEditTime: 2020-06-09 15:27:49
 * @Descibe 后台管理系统 文章控制器
 */ 

'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    
    async addArticle() {           //新增文章
        const res = await this.service.article.addArticles();
        this.ctx.body = {
            code:200,
            data:{},
            msg:'添加成功'
        };
    }
    async getArticle() {           //获取文章
        const res = await this.service.article.getArticleDetail();
        this.ctx.body = {
            code:200,
            data:res,
            msg:'添加成功'
        };
    }
    
}

module.exports = ArticleController;