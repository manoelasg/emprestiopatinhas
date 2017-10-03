var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

var paths = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'js/**/*'
];

gulp.task('scripts', function() {
    return gulp.src(paths)
        .pipe(concat('app-concat.js'))
        .pipe(gulp.dest('./www/js'))
});

gulp.task('watch', function() {
    gulp.watch('js/**/*', ['scripts'])
});
