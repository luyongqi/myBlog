/*
 * @Author: 卢勇其
 * @Date: 2020-05-30 14:48:18
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 17:32:29
 * @Descibe 后台管理系统 文章控制器
 */ 

'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    
    async addArticle() {           //新增文章
        const res = await this.service.article.addArticle();
        this.ctx.body = {
            code:200,
            data:res,
            msg:'添加成功'
        };
    }

}

module.exports = ArticleController;