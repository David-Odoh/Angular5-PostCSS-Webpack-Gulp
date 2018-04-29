const gulp = require('gulp'),
// webserver = require('gulp-webserver'),
postcss = require('gulp-postcss'),
cssnext = require('postcss-cssnext')
gutil = require('gulp-util'),
sourcemaps = require('gulp-sourcemaps'),

gulp.task('default', function() {
 console.log('I am running the gulp server');
});

gulp.task('css', function() {
    gulp.src('postcss/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-partial-import')({prefix: '_', extension: '.css'}),
      cssnext()
    ]))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../src/'));
  });

  gulp.task('default', ['css']);