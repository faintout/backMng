# backMng-简单后台管理
### 前台使用vue ，后台使用node开发  

功能点：前台登录的响应和拦截，以及对数据的存储，跨域处理，请求头携带token，vuex的使用，前置路由的拦截。  
后台的对数据库的增删改查操作，和token的生成和登录的验证。

### 使用方法

后台：  
创建本地或远程数据库mysql  
然后创建库名back_info 导入back_info.sql文件生成表结构。  
在server/app/pool.js 去配置数据库连接信息  
开启方法：npm i   
node app.js

前台：  
npm i   
npm run serve

账号密码在数据库的user_info  
默认admin P@ssw0rd  


此代码用于交流学习。
