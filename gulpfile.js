var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
    gulp.src('src/content/**/*.html')
        .pipe(plugins.fileInclude({
            prefix: '@',
            basepath: 'src/includes'
        }))
        .pipe(gulp.dest('dist'));
});