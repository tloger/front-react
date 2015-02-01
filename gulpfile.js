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
    //.pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browserify', function() {
  gulp.src('src/js/router.js')
    .pipe(browserify({
      transform: 'reactify'
    }))
    .pipe(concat('router.js'))
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

  // gulp.src('src/**/*.js')
  //   .pipe(gulp.dest('dist'))
  //   .pipe(reload({
  //     stream: true
  //   }));
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
  runSequence('clean', 'copy', 'browserify');
});

gulp.task('watch', function() {
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