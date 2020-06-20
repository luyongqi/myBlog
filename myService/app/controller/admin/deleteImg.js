/*
 * @Author: 卢勇其
 * @Date: 2020-06-20 11:15:20
 * @LastEditors: your name
 * @LastEditTime: 2020-06-20 15:10:20
 */ 
'use strict';

const Controller = require('egg').Controller;

class DeleteImgController extends Controller {
    
    // 删除图片
    async deleteImg() {
        const res = await this.service.tools.deleteFolder();
        if(res=='删除成功'){
            this.ctx.body = {
                code: 200,
                message: '图片删除成功',
                data: ''
            }
        }
    }
}

module.exports = DeleteImgController;