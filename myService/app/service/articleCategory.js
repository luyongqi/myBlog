/*
 * @Author: 卢勇其
 * @Date: 2020-06-18 11:04:33
 * @LastEditors: your name
 * @LastEditTime: 2020-06-24 17:01:08
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
    
    async updateCategory() {        //修改文章分类
        let query = this.ctx.request.body
        console.log(query)
        const result = await this.ctx.model.ArticleCategory.updateOne({
            "_id":query._id
        },query);
        return result
    }

    // 保存头像/封面
    async saveAvatar() {
        const { ctx } = this;
        const parts = ctx.multipart({ autoFields: true });
        let files = {};
        let stream;
        while ((stream = await parts()) != null) {
            if(!stream.filename){
                break;
            }
            const fieldname = stream.fieldname; // file表单的名字
            // 上传图片的目录
            const dir = await this.service.tools.getUploadFile(stream.filename);
            const target = dir.uploadDir;
            const writeStream = fs.createWriteStream(target);
        
            await pump(stream, writeStream);
        
            files = Object.assign(files, {
                [fieldname]: dir.saveDir
            });
        }
    
        if(Object.keys(files).length > 0){
            ctx.body = {
                code: 200,
                message: '图片上传成功',
                data: files
            }
        }else{
            ctx.body = {
                code: 500,
                message: '图片上传失败',
                data: {}
            }
        }
    }

}

module.exports = ArticleCategoryService;