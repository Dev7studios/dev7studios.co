var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify');

gulp.task('clean', function() {
	return gulp.src(['assets/dist', 'assets/fonts'], {base: '/', allowEmpty: true})
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

gulp.task('watch', gulp.series('styles', 'scripts', function(done) {
	gulp.watch('assets/css/**/*.css', gulp.series('styles'));
	gulp.watch('assets/js/**/*.js', gulp.series('scripts'));
    done();
}));

gulp.task('default', gulp.series(['clean', 'copy-fonts', 'styles', 'scripts']));
