var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//var runSequence = require('run-sequence');

var angularControllers = [
	'public/ng-scripts/app.js',
	'public/ng-scripts/filters.js',
	'public/ng-scripts/directive.js',
	'public/modules/home/homeCtrl.js',
];


var angularDep = [
	'public/js/bower/jquery/jquery.min.js',
	'public/js/bower/angular/angular.js',
	'public/js/bower/angular-route/angular-route.js',
];


gulp.task('loadController', () => {
	return gulp.src(angularControllers)
		.pipe(concat('angular_controllers.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public'));
});

gulp.task('loadDep', () => {
	return gulp.src(angularDep)
		.pipe(concat('angular_dependency.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public'));
});

// gulp.task('default', function(callback) {
// 	runSequence('loadController', 'loadDep', callback);
// });