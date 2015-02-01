var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var react = require('gulp-react');
var runSequence = require('run-sequence');

gulp.task('react', function() {
  return gulp.src('./src/js/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browserify', function() {
  gulp.src('dist/js/**/*.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function() {
  runSequence('react', 'browserify', 'copy', 'connect');
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});


var del = require('del');
var connect = require('gulp-connect');

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