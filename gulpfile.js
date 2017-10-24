//gulp


//var gulp = require("gulp");
//gulp.src("src/js/bullet.js")
//.pipe(gulp.dest('dest/js'));//
//var gulp = require("gulp");
//
//gulp.task("task1",function(){
//	console.log("任务一");
//	
//});
//
//gulp.task("task2",["task1"],function(){
//	console.log("任务二");
//})
//
////默认任务
//gulp.task("default",["task1","task2"],function(){
//	console.log("默认任务");
//});

var gulp = require("gulp");
var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩插件
var bom = require('gulp-bom'); //解决中文乱码插件
var minifyCss = require('gulp-minify-css'); //css压缩插件
var minifyHtml = require('gulp-minify-html'); //html压缩插件
var imagemin = require('gulp-imagemin'); //图片压缩相关插件
var pngquant = require('imagemin-pngquant'); //png图片压缩插件
var rename = require('gulp-rename'); //重命名插件
/*//压缩html
gulp.task('htmlTask2', function(){
	gulp.src('src/dafeiji.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dest/'));
});

gulp.task('default', ['htmlTask2']);
*/

/*
//压缩css
gulp.task('cssTask', function(){
	gulp.src('src/css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});

gulp.task('default', ['cssTask']);

*/

/*
//压缩js
gulp.task('jsTask', function(){
	gulp.src('src/js/*')
//	.pipe(bom()) 
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']);
*/


/*
//压缩图片
gulp.task('imgTask', function(){
	gulp.src('src/images2/*')
	.pipe(imagemin({
		progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
		use: [pngquant()] //使用pngquant插件来深度压缩png图片
//		optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
	}))
	.pipe(gulp.dest('dest/images2'));
});
gulp.task('default', ['imgTask']);

*/


//先es6转es5，再压缩js
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件
//压缩js
gulp.task('jsTask2', function(){
	gulp.src('src/js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask2']);