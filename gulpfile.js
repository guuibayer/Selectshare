const gulp   = require('gulp'),
      uglify = require('gulp-uglify'),
      babel  = require('gulp-babel'),
      rename = require('gulp-rename');

gulp.task('build', () => {
  gulp.src('./src/scripts/selectshare.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', () => {
  gulp.src('./dist/selectshare.js')
    .pipe(uglify())
    .pipe(rename('selectshare.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build', 'minify']);