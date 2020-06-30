/*
 * @Author: 卢勇其
 * @Date: 2020-06-30 16:40:44
 * @LastEditors: your name
 * @LastEditTime: 2020-06-30 18:31:18
 */ 
'use strict';
 
const Service = require('egg').Service;
const path = require("path");
const  fs = require('fs') 

class AlbumService extends Service {

  // 获取静态资料相册目录
  async getAlbumDir() {
    var param = path.resolve('./');
    var dir = path.join(param,'/app/public/admin/upload/')
    var allAlbums = [];
    fs.readdir(dir,function(err,files){
        console.log(files)
        // for(let i=0,len=files.length;i<len;i++){
        //     fs.stat(dir+files[i],function(err,stats){
        //         if(stats.isDirectory()){
        //             allAlbums.push(files[i]);
        //         }
        //     });
        // } 
        allAlbums = files
    });
    
    return allAlbums
  }
  
}


 
module.exports = AlbumService;