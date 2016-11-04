var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src(['assets/dist', 'assets/fonts'], {base: '/'})
	    	   .pipe(clean());
});

gulp.task('copy-fonts', ['clean'], function() {
	return gulp.src('node_modules/font-awesome/fonts/*')
	    	   .pipe(gulp.dest('assets/fonts'));
});

gulp.task('default', ['copy-fonts'], function() {
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
