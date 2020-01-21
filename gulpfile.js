'use strict';

var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    cleanCSS      = require('gulp-clean-css'),
    del           = require('del'),
    minify        = require('gulp-minify'),
    sass          = require('gulp-sass');

var reload = browserSync.reload;

gulp.task('clean', function() {
  return del('dist/**', { force: true });
});

gulp.task('compress-js', function() {
  gulp.src(['src/scripts/*.js', '!src/scripts/*min.js'])
    .pipe(minify({
      ext:{
        src: '-debug.js',
        min:'.min.js'
      },
      exclude: ['tasks'],
      noSource: true,
      ignoreFiles: []
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({stream: true}));
});

gulp.task('compress-css', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .on('error', function (error) {
      console.log('Style problem: ' + error);
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('move', ['compress-css', 'compress-js'], function() {
  //to do: minify css and send to dist
  gulp.src('src/styles/*.css')
    .pipe(gulp.dest('dist/styles'))
  gulp.src('src/scripts/*.min.js')
    .pipe(gulp.dest('dist/scripts'))
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
});

// Watch Files For Changes & Reload
gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: './dist',
      port: 3000, 
      directory: true
    }
  });

  gulp.watch('src/**/*.scss', ['move']);

  gulp.watch('src/*.js', ['move']);

  gulp.watch('src/*.html', ['move']);

  // protip: stop old version of gulp watch from running when you modify the gulpfile
  gulp.watch('gulpfile.js').on('change', () => process.exit(0)); 
});


// Main CLI Gulp commands
gulp.task('build', ['move']);

gulp.task('default', ['serve'], function () { });