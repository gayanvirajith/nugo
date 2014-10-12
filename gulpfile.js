var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	imagemin = require('gulp-imagemin');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

// Gulp task - uglify-modernizr 
// Minifiy our modernizr file
gulp.task('uglify-modernizr', function(){
	gulp.src('assets/js/modernizr.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/min'))
});

// Gulp task - uglify-css
// Uglifies 
gulp.task('uglify-css', function(){
	gulp.src('assets/css/*.css')
	.pipe(uglify())
	.pipe(gulp.dest('assets/css/min'))
});

// Gulp task - scss
// Convert sass files into css
gulp.task('scss', function (){
	gulp.src('assets/css/atf.scss')
	.pipe(plumber())
	.pipe(sass({
		style: 'compressed',
		loadPath: __dirname + 'assets/css'
	}))
	.on('error', function (err) { console.log(err); })
	.pipe(gulp.dest('_includes/css/'));
});

// Gulp task - img-min
// Compress images
gulp.task('img-min', function() {
	gulp.src('assets/css/images/*')
		.pipe(imagemin({
			progressive: false
		}))
		.pipe(gulp.dest('assets/css/images/min/'));
	gulp.src('thumbnails/*.jpg')
		.pipe(imagemin({
			progressive: false
		}))
		.pipe(gulp.dest('thumbnails/min/'))
});

// Gulp task - watch
// Listen the changes and run a task
gulp.task('watch', function(){
	gulp.watch('assets/css/atf.scss', ['scss'])
});

// Default gulp task
gulp.task('default', ['watch']);