var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var concat = require('gulp-concat')
var stripCssComments = require('gulp-strip-css-comments')
var uglify=  require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var watch = require('gulp-watch')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = '';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '**/*.{js,html,css,png,jpg,gif}'],
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
  gulp.watch("*.html").on("change", reload)
  gulp.watch("./assets/css/style.css").on("change", reload)
  gulp.watch("./assets/js/main.js").on("change", reload)
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

gulp.task('default', ['serve', 'css', 'js', 'images']) 