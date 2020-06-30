/*
 * @Author: 卢勇其
 * @Date: 2020-06-30 16:57:02
 * @LastEditors: your name
 * @LastEditTime: 2020-06-30 18:29:05
 */ 
'use strict';

const Controller = require('egg').Controller;

class AlbumController extends Controller {
    
    // 获取相册目录
    async getAlbumDir() {
        const res = await this.service.album.getAlbumDir();
        this.ctx.body = {
            code:200,
            data:res,
            msg:'成功'
        };
    }
}

module.exports = AlbumController;