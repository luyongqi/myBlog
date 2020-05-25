<!--
 * @Author: 卢勇其
 * @Date: 2020-05-23 15:53:13
 * @LastEditors: your name
 * @LastEditTime: 2020-05-25 16:03:07
--> 

## React 配置单项代理
   package.json加入   "proxy": "http://127.0.0.1:7001"
   
## 配置多个url
    ①安装 http-proxy-middleware 依赖  npm install --save-dev http-proxy-middleware
    ②在项目中 src 文件夹下新建文件 setupProxy.js 
        const proxy = require('http-proxy-middleware')
        module.exports = function(app) {
          app.use(
            proxy('/back', {
              target: 'http://172.20.1.148:8082',
              changeOrigin: true
            })
          )
          app.use(
            proxy('/common', {
              target: 'http://172.20.1.148:8082',
              changeOrigin: true
            })
          )
        }

