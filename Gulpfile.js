var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat');

var url = 'http://localhost:1313',
    assets = './assets/',
    css = 'static/css/';
    js = 'static/js/';

gulp.task('sass', function() {
  return gulp.src( assets + 'scss/styles.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(autoprefixer( { browsers: [
      "Android 2.3",
      "Android >= 4",
      "Chrome >= 20",
      "Firefox >= 24",
      "Explorer >= 8",
      "iOS >= 6",
      "Opera >= 12",
      "Safari >= 6"
    ]} ))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(css));
});

gulp.task('watch', function() {
  gulp.watch([assets + 'scss/**/*'], ['sass']);
  gulp.watch('assets/js/**/*.js', ['build-js']);
});
