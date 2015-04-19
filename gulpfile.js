var gulp = require('gulp');
var config = require('./config');
var plugins = require('gulp-load-plugins')();

gulp.task('assets', function() {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
    gulp.src('src/content/**/*.html')
        .pipe(plugins.fileInclude({
            prefix: '@',
            basepath: 'src/includes'
        }))
        .pipe(plugins.wrap(
            { src: 'src/layouts/default.html' },
            { data: config }
        ))
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
    return gulp.src('dist/**/*')
        .pipe(plugins.ghPages());
});

gulp.task('server', function() {
    plugins.connect.server({
        root: 'dist'
    });
});

gulp.task('watch', function () {
    gulp.watch(['src/assets/**/*'], ['assets']);
    gulp.watch(['src/content/**/*.html', 'src/layouts/**/*.html'], ['build']);
});

gulp.task('default', ['server', 'watch']);