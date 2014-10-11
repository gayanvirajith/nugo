var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');

// Gulp task - uglify-modernizr 
// Minifiy our modernizr file
gulp.task('uglify-modernizr', function(){
	gulp.src('assets/js/modernizr.js')
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/min'))
});


gulp.task('uglify-css', function(){
	gulp.src('assets/css/*.css')
	.pipe(uglify())
	.pipe(gulp.dest('assets/css/min'))
});

// Gulp scss
gulp.task('scss', function (){
	gulp.src('assets/css/atf.scss')
	.pipe(sass({
		style: 'compressed'
	}))
	.on('error', function (err) { console.log(err.message); })
	.pipe(gulp.dest('assets/css/'));
});

// Default gulp task
gulp.task('default', function(){
	
});