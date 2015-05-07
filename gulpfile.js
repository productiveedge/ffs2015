var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
    changed = require('gulp-changed');


var all = [
    './client/**/*',
    './client/*'
];

gulp.task('dist-source-copy', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('.dist'));
});

gulp.task('build-source-copy', function () {
   gulp.src(all)
      .pipe(gulp.dest('.build'));
});

gulp.task('dist', ['dist-source-copy'], function () {
   
});

gulp.task('default', ['build-source-copy'], function(){/* NOOP */});

gulp.task('watch', function(){
    gulp.watch('./client/**/*.js',['build-source-copy']);
});