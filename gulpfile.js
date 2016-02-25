var tsproject = require('tsproject');
var gulp = require('gulp');

gulp.task('build', function () {
    return tsproject.src('./tsconfig.json', { logLevel: 0 })
        .pipe(gulp.dest('./'));
});