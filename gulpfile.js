var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber');

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
	gulp.src('_includes/css/atf.scss')
	// .pipe(plumber())
	.pipe(sass({
		style: 'compressed',
		// loadPath: __dirname + 'assets/css'
	}))
	.on('error', function (err) { console.log(err); })
	.pipe(gulp.dest('_includes/css/'));
});

// Gulp task - watch
// Listen the changes and run a task
gulp.task('watch', function(){
	gulp.watch('_includes/css/atf.scss', ['scss'])
});

// Default gulp task
gulp.task('default', ['watch']);