
/*src 目录为源码， build 用于调试，dist 为打包后文件 */


src>script 的 目录结构
    config   路由
        dict.js
        router.js 路由配置文件
    controller  控制层
    direvtive  指令

src>view的目录结构
	>template
		positionList  职位列表
	position.html  		职位详情

1. 本文件无需部署

2. 先安装 package.json 中的node模块 npm install

可能需要全局安装 gulp，即 
npm i -g gulp

3. 然后安装 bower.json 中的模块 bower install 

需要全局安装bower  
npm i -g bower 


4. 开发时需要启动 gulp 任务 监听代码并事实行编译   

gulp

5. src目录中的 data 文件夹为假数据，直接放置到项目的 src 目录即可。

6. 浏览器输入http://localhost:1234/

[在安装node 模块后 ，只需要安装 gulp 即可  。 如下
npm install gulp -g  // 将这个命令安装到全局变量里面
npm install gulp -save  // 项目文件中将这个命令通过本地的依赖包进行安装
gulp // 如果编写好了gulpfile的话，运行这个命令会自动的去同步的
]


开发步骤

view>template ，创建一个html文件
script>directive, 创建一个js脚本
style>template , 创建一个css文件


git上传项目  指令
	echo "# angularjs-demo" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin https://github.com/huangyaqin/angularjs-demo.git
	git push -u origin master



