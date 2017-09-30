var gulp = require('gulp');
var concat = require('gulp-concat');
var minCss = require('gulp-clean-css');
var minJs = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
gulp.task('copyFile',function(){
    gulp.src('./style.css')
        .pipe(gulp.dest('./item/'))
})//拷贝文件
gulp.task('concat',function(){
    gulp.src(['./a.txt','./b.txt'])
        .pipe(concat('./c.txt'))
        .pipe(gulp.dest('./item/'))
});//合并
gulp.task('minJs',function(){
    gulp.src('./sort.js')
        .pipe(minJs())
        .pipe(rename('./sort.min.js'))
        .pipe(gulp.dest('./item/'))
})//压缩js
gulp.task('minCss',function(){
    gulp.src('./style.css')
        .pipe(minCss())
        .pipe(rename('./style.min.js'))
        .pipe(gulp.dest('./item/'))
})//压缩css
gulp.task('mScss',function(){
    gulp.src('./styles.scss')
        .pipe(sass())
        .pipe(rename('./style1.css'))
        .pipe(gulp.dest('./item/'))
})//解析scss
gulp.task('httpServer',function(){
    connect.server({
        port:8888,
        livereload:true
    })
});//起服务
gulp.task('loading',function(){
    gulp.src(['style.css','a.txt','b.txt','styles.scss','sort.js'])
        .pipe(connect.reload());
})//刷新
gulp.task('watch',function(){
    gulp.watch('style.css',['copyFile']);
    gulp.watch(['./a.txt','./b.txt'],['concat']);
    gulp.watch('styles.scss',['mScss']);
    gulp.watch('sort.js',['minJs']);
    gulp.watch('style.scss',['minCss'])
    gulp.watch(['style.css','a.txt','b.txt','styles.scss','sort.js'],['loading']);
})//监听
gulp.task('default',['httpServer','watch'])//执行默认任务