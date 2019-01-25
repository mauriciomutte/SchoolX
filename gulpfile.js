var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var concat = require('gulp-concat')
var stripCssComments = require('gulp-strip-css-comments')
var uglify=  require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var watch = require('gulp-watch')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('sw', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = './';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [
      rootDir + 'manifest.json', 
      'assets/js/*.js',
      'assets/img/*.png',
      'assets/img/*.jpg',
      'assets/css/*.css',
      'index.html',
      'conteudo/*.html',
      'agenda/*.html',
      'conteudo/segundo/materia/*.html',
      '*.json'
    ],
    stripPrefix: rootDir
  }, callback);
});

// BrowserSync
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  gulp.watch(['assets/css/style.css', 'assets/js/*.js'], ['sw'])
})

// CSS Task
gulp.task('css', function(){
  gulp.src('assets/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('assets/css/'))
})

// JS Task
gulp.task('js', function(){
  gulp.src('assets/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
})

// Image Task
gulp.task('images', function(){
  gulp.src(['assets/img/*.jpg', 'assets/img/*.png'])
    .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
    .pipe(gulp.dest('assets/img/'))
})

gulp.task('watch', function(){
  gulp.watch('assets/css/*.css', ['css','sw'])
})

gulp.task('default', ['serve', 'css', 'js', 'images']) 