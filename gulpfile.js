var gulp  = require('gulp');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');

gulp.task('jshint', function() {
    return gulp.src('sample/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(['sample/**/*.js', 'components/**/*.vue'], ['jshint', 'browserify']);
});

gulp.task('browserify', function() {
    gulp.src('sample/main.js')
        .pipe(browserify({transform: ["debowerify", "vueify"]}))
        .pipe(gulp.dest('dist'));

    gulp.src('sample/popup/main.js')
        .pipe(browserify({transform: ["debowerify", "vueify"]}))
        .pipe(gulp.dest('dist/popup'));
});

gulp.task('default', function(){
    runSequence('jshint', 'browserify', 'watch');
});