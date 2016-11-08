var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify');

gulp.task('clean', function() {
	return gulp.src(['assets/dist', 'assets/fonts'], {base: '/'})
	    	   .pipe(clean());
});

gulp.task('copy-fonts', function() {
	return gulp.src('node_modules/font-awesome/fonts/*')
	    	   .pipe(gulp.dest('assets/fonts'));
});

gulp.task('styles', function() {
	return gulp.src([
					'node_modules/normalize.css/normalize.css',
					'node_modules/font-awesome/css/font-awesome.min.css',
					'assets/css/style.css'
				], {base: '/'})
			   .pipe(minifyCSS())
			   .pipe(autoprefixer())
			   .pipe(concat('style.min.css'))
	    	   .pipe(gulp.dest('assets/dist'));
});

gulp.task('scripts', function() {
    return gulp.src([
					'node_modules/scrollreveal/dist/scrollreveal.min.js',
					'assets/js/lib.js'
			    ], {base: '/'})
	           .pipe(concat('scripts.min.js'))
	           .pipe(uglify())
	           .pipe(gulp.dest('assets/dist'));
});

gulp.task('watch', ['styles', 'scripts'], function() {
	gulp.watch('assets/css/**/*.css', ['styles']);
	gulp.watch('assets/js/**/*.js', ['scripts']);
});

gulp.task('default', ['clean', 'copy-fonts', 'styles', 'scripts']);
