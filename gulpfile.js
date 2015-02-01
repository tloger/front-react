var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var react = require('gulp-react');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

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
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('copy', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('server', ['clean', 'copy', 'react'], function() {
  runSequence('browserify', 'connect');
});

gulp.task('browser-sync', ['watch'], function() {
  browserSync({
    server: {
      baseDir: [__dirname] + '/dist'
    }
  });
});

gulp.task('build', function() {
  runSequence('clean', 'copy', 'react', 'browserify');
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['copy']);
  gulp.watch('src/js/**/*.jsx').on('change', function(file) {
    runSequence('react', 'browserify');
  });
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