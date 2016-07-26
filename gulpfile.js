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
	//.pipe(sourcemaps.init({ loadMaps: true }))
    //.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest("./client/js/dest"))
	.pipe(browserSync.stream());
}

gulp.task("watch", function(){
	watchify.args.debug = true;
	var watcher = watchify(browserify("./client/js/app/app.js", watchify.args));
	
	bundleFun(watcher);
	
	watcher.on("update", function(){
		bundleFun(watcher);
	}); 
	
	watcher.on("log", util.log);
	
	browserSync.init({
		server: "./client/", 
		port: 8080,
		logFileChange: false
	});
})
gulp.task("js", function(){
	return bundleFun(browserify("./client/js/app/app.js"));
})