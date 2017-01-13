import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('es6', () => {
  gulp.src('./*.js')
    .pipe(babel({
      ignore: 'gupfile.babel.js'
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
  gulp.watch('./*.js', ['es6']);
});

gulp.task('default', ['es6', 'watch']);

