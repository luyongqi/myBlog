var express = require('express');
var express = require('express');
var mongoose = require('mongoose');//导入mongoose模块

var Users = require('../modules/users');//导入模型数据模块
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // 插入操作
     console.log(111,req.query,11111111)
      var id = req.query.id; 
      var user = new Users({
         name:'李小白',
         paw:"1234586"
      });
      user.save(function(err,res){
        if(err){
          console.log("Error"+err)
        }else{
          console.log("Res"+res)
        }
      });  
    // 查询操作 通过id查询
    if(!id){
      Users.fetch(function(err, users) {
        res.send(users);
        // res.render('index',{title: '用户列表', users: users})  //这里也可以json的格式直接返回数据res.json({data: users});
      })
    }else{
     Users.findById(id,function(err,users){
       res.send(users);
     })

    }
    
});

module.exports = router;
