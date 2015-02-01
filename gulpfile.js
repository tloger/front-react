var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var livereload = require('gulp-livereload');

gulp.task('browserify', function() {
  gulp.src('src/js/router.js')
    .pipe(browserify({
      transform: 'reactify'
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({
      stream: true
    }))
    .pipe(livereload());
});


gulp.task('copy', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload({
      stream: true
    }))
    .pipe(livereload());
});

gulp.task('server', ['clean', 'copy'], function() {
  runSequence('browserify', 'connect', 'watch');
});

gulp.task('bs', ['watch'], function() {
  browserSync({
    server: {
      baseDir: [__dirname] + '/dist'
    },
    logLevel: "silent"
  });
});

gulp.task('build', function() {
  runSequence('clean', 'copy', 'browserify');
});

var server = livereload();
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.html', ['copy']);
  gulp.watch('src/js/**/*.js', ['browserify']);
  gulp.watch('src/js/**/*.jsx', ['browserify']);
});

gulp.task('connect', function() {
  connect.server({
    root: [__dirname] + '/dist',
    port: 9000,
    livereload: true
  });
});

gulp.task('clean', function() {
  del(['dist', 'temp']);
});