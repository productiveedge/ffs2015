var gulp = require('gulp'),
   uglify = require('gulp-uglify');

gulp.task('dist-source-copy', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('.dist'))
});

gulp.task('build-source-copy', function () {
   gulp.src('js/app.js')
      .pipe(gulp.dest('.build'))
});

gulp.task('dist', ['dist-source-copy'], function () {
   
});