var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var less = require('gulp-less');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var browserify = require('gulp-browserify');

var prod = 1;
var buildPath = prod ? 'dist/prod/' : 'dist/dev/';
var fileName = prod ? 'main.min' : 'main';
var src = {
  html: 'app/*.html',
  js: 'app/*.js',
  css: 'app/*.css'
};

gulp.task('js', function(){
  return gulp.src(src.js)
    .pipe(concat(fileName + '.js'))
    .pipe(browserify())
    .pipe(gulpif(prod, uglify()))
    .pipe(gulp.dest(buildPath))
});

gulp.task('css', function(){
  return gulp.src(src.css)
    .pipe(concat(fileName + '.css'))
    .pipe(gulp.dest(buildPath))
});

gulp.task('html', function(){
  return gulp.src(src.html)
    .pipe(htmlreplace({
      'css': fileName + '.css',
      'js': fileName + '.js'
    }))
    .pipe(gulp.dest(buildPath))
});

gulp.task('clean', function(){
  return gulp.src(buildPath, {read: false})
    .pipe(clean());
});

gulp.task('build', ['js', 'css', 'html']);
