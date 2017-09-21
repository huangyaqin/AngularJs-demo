
/*app.js  启动程序，所有脚本的入口 。 在gulp中 将所有js合并到index.js 文件中*/
 
'use stric111t';  //使用严格模块

// [声明模块的依赖]

/* 路由配置 ui.router */
angular.module('app', ['ui.router', 'ngCookies', 'validation', 'ngAnimate']);
