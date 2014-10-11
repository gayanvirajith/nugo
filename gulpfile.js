var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src('assets/js/modernizr.js')
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/min'));
});