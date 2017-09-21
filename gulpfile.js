/*
gulp 配置文件


nodejs 安装插件
concat   合并js文件
uglify  压缩js代码
imagemin  压缩图片
less  less编译


常用文件 API 
  src 读取文件和文件夹    dest 生成文件    watch 监控文件    task  定制文件    pipe  使用流的方式处理文件
*/

 //引入模块
var gulp = require('gulp'); 
var $ = require('gulp-load-plugins')(); 
var open = require('open');

var app = { //声明全局变量
  srcPath: 'src/', /*源文件*/
  devPath: 'build/', /*开发环境存在文件*/
  prdPath: 'dist/' /*打包压缩文件的目录*/
};

//拷贝文件 调用task（）函数  （gulp lib）
gulp.task('lib', function() {
  gulp.src('bower_components/**/*.js') /*读此文件下所有的js源文件*/
  .pipe(gulp.dest(app.devPath + 'vendor')) /*将所读文件写入 build 目录下*/
  .pipe(gulp.dest(app.prdPath + 'vendor')) /*将所读文件写入 dist 目录下*/
  .pipe($.connect.reload()); /*浏览器实时预览 不支持ie8*/
});

gulp.task('html', function() {
  gulp.src(app.srcPath + '**/*.html')
  .pipe(gulp.dest(app.devPath))
  .pipe(gulp.dest(app.prdPath))
  .pipe($.connect.reload());
})


gulp.task('json', function() {
  gulp.src(app.srcPath + 'data/**/*.json')
  .pipe(gulp.dest(app.devPath + 'data'))
  .pipe(gulp.dest(app.prdPath + 'data'))
  .pipe($.connect.reload());
});

gulp.task('less', function() {
  gulp.src(app.srcPath + 'style/index.less')
  .pipe($.plumber())
  .pipe($.less())  /*编译less文件*/
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin()) /* 压缩css 文件*/
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('js', function() {
  gulp.src(app.srcPath + 'script/**/*.js')
  .pipe($.plumber())
  .pipe($.concat('index.js')) /*将所读文件合并为 index.js文件 */
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify()) /* 压缩js 文件*/
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
});

gulp.task('image', function() {
  gulp.src(app.srcPath + 'image/**/*')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'image'))
  .pipe($.imagemin()) /* 压缩img 文件*/
  .pipe(gulp.dest(app.prdPath + 'image'))
  .pipe($.connect.reload());
});

// 总任务，合并所有的任务 （gulp build）
gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);

/*发布时清楚之前的压缩文件*/
gulp.task('clean', function() {
  gulp.src([app.devPath, app.prdPath])
  .pipe($.clean()); /*清楚build和dist目录下的文件*/
});

//编写一个服务器
gulp.task('serve', ['build'], function() {
  $.connect.server({
    root: [app.devPath],  /*默认冲开发环境中 build读取*/
    livereload: true, /*自动刷新浏览器 不支持ie*/
    port: 3000 /*定义端口*/
  });

  open('http://localhost:3000'); //服务器启动后自动打开新的端口

  //实时监控
  gulp.watch('bower_components/**/*', ['lib']);
  gulp.watch(app.srcPath + '**/*.html', ['html']);
  gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
  gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
  gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
  gulp.watch(app.srcPath + 'image/**/*', ['image']);
});

//node中直接写 gulp  就会调用 gulp serve任务
gulp.task('default', ['serve']);
