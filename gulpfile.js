var gulp = require('gulp')
//var connect = require('gulp-connect')
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

var paths = {
    html: ['app/*.html', 'app/**/*.html'],
    js: ['app/*.js', 'app/**/*.js', ],
    css: ['app/*.css', 'app/**/*.css']
};

gulp.task('browserSync',['nodemon'], function() {
    browserSync.init(null,{
        proxy: "http://localhost:5000",
        // server: {
        //     baseDir: 'app'
        // },
        //browser: "Internet Explorer",
        port: 4040
    });
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(paths.html, browserSync.reload);
    gulp.watch(paths.js, browserSync.reload);
    gulp.watch(paths.css, browserSync.reload);
});

// gulp.task('connect', function () {
// 	connect.server({		
// 		port: 4040
// 	})
// })

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app/app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('default', function () {
    console.log('********************************************');
    console.log(gutil.colors.cyan('Gulp help'));
    console.log('********************************************');
    console.log('gulp watch');
    console.log('launches watcher for html, js and css files');
    console.log('********************************************');
    // TODO
});