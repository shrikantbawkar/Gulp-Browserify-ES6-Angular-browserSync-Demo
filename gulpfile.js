var gulp = require("gulp");
var sourcemaps = require('gulp-sourcemaps');
var util = require("gulp-util");
var uglify = require("gulp-uglify");
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var exorcist = require("exorcist");
var browserSync = require("browser-sync").create();
var ngAnnotate = require("gulp-ng-annotate");
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass');

function bundleFun(bundler) {
	return bundler
	.transform(babelify, {presets: ["es2015", "react"]})
	.bundle()
	.on("error", function(e){
		util.log(e);
	})
	.pipe(exorcist("./client/js/dest/app.js.map"))
	.pipe(source("bundle.js"))
	.pipe(buffer())
	.pipe(ngAnnotate())
	.pipe(uglify())
	//remove uglify in order to do debugging the application  
	.pipe(gulp.dest("./client/js/dest"))
	.pipe(browserSync.stream());
}

gulp.task('process-styles', function() {
    return sass('./client/assets/css/style.scss')
		.pipe(gulp.dest('./client/assets/css/style'))
		.pipe(browserSync.stream());
});

gulp.task("watch", function(){
	
	gulp.watch('./client/assets/css/style.scss', ['process-styles']);
	
	watchify.args.debug = true;
	var watcher = watchify(browserify("./client/js/app/app.js", watchify.args));
	
	bundleFun(watcher);
	
	watcher.on("update", function(){
		bundleFun(watcher);
	}); 
	
	watcher.on("log", util.log);
	
	browserSync.init({
		server: "./", 
		port: 8080,
		logFileChange: false
	});
});
gulp.task("js", function(){
	return bundleFun(browserify("./client/js/app/app.js"));
});

gulp.task('start', function() {
    runSequence(['process-styles', 'watch']);
});
