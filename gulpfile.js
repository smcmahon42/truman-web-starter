/**
 *
 *  TRUMAN WEB STARTER
 *  AUTHOR: SINCERELY TRUMAN
 *
 */

'use strict';


// VARIABLES *************

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'last 2 versions',
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


// TASKS *************


// JS Hint & Uglify
// Check JS for syntax errors, minify & move to public/assets
gulp.task('scripts', function () {
  return gulp.src('src/js/**/*.js')
    //check JS syntax
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    //uglify to public
    .pipe($.uglify())
    .pipe(gulp.dest('public/assets/js'))
    .pipe($.livereload());
});


// Sass & Autoprefix
// Compile and Automatically Prefix Stylesheets for chosen browsers
gulp.task('styles', function () {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
      'src/scss/*.scss'
    ])
    .pipe($.changed('styles', {extension: '.scss'}))
    .pipe($.rubySass({
        style: 'compressed',
        precision: 10
      })
      .on('error', console.error.bind(console))
    )
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('public/assets/css'))
    // Concatenate And Minify Styles
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('public/assets/css'))
    .pipe($.size({title: 'styles'}))
    .pipe($.livereload());
});


// Optimize Images
// Optimizes images for deployment & overwrites original files
gulp.task('images', function () {
  return gulp.src('public/assets/img/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('public/assets/img'))
    .pipe($.size({title: 'images'}));
});


// Watch Files For Changes & Reload
// Uncomment proxy and change to dev site local url
gulp.task('default', ['styles', 'scripts'], function () {

  // $.livereload.listen();

  browserSync({
      proxy: "http://local.trumanstarter.com"
  });

  gulp.watch(['src/scss/**/*.scss'], ['styles', reload]);
  gulp.watch(['src/js/**/*.js'], ['scripts', reload]);
  gulp.watch(['public/assets/img/**/*'], ['images', reload]);
});
