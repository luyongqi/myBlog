/*
 * @Author: 卢勇其
 * @Date: 2020-06-18 10:58:55
 * @LastEditors: your name
 * @LastEditTime: 2020-06-24 17:01:19
 */ 
'use strict';

const Controller = require('egg').Controller;

class ArticleCategoryController extends Controller {
    
    async addCategory() {           //新增分类
        const res = await this.service.articleCategory.addCategorys();
        this.ctx.body = {
            code:200,
            data:{},
            msg:'新增文章分类成功'
        };
    }

    async getAllCategory() {           //获取所有分类
        const res = await this.service.articleCategory.getAllCategory();
        this.ctx.body = {
            code:200,
            data:res,
            msg:'成功'
        };
    }

    async getAllCategory() {           //获取所有分类
        const res = await this.service.articleCategory.getAllCategory();
        this.ctx.body = {
            code:200,
            data:res,
            msg:'成功'
        };
    }

    async updateCategory() {           //修改分类
        const res = await this.service.articleCategory.updateCategory();
        this.ctx.body = {
            code:200,
            data:res,
            msg:'成功'
        };
    }
    
}

module.exports = ArticleCategoryController;