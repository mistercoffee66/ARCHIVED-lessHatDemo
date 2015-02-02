var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({
		pattern: 'gulp-*'
	});




//main less
gulp.task('less', function() {
	return gulp.src(['./less/main.less'])
			.pipe(plugins.less({
				compress: false
			}))
			.pipe(gulp.dest('./css'));
});


//watch for dev changes to run tasks and livereload
gulp.task('watch',['less'], function() {
	//plugins.livereload.listen();
	gulp.watch('./less/**/*.less', ['less']);
	//gulp.watch(['./css/*.css']).on('change', plugins.livereload.changed);
});

gulp.task('default', ['less', 'watch']);