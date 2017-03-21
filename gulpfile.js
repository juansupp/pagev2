'use strict';

//var childProcess = require('child_process');
var gulp = require('gulp');
var jetpack = require('fs-jetpack');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

var projectDir = jetpack;
var srcDir = projectDir.cwd('./own');
var destDir = projectDir.cwd('./dist');

// -------------------------------------
// Tasks
// -------------------------------------

gulp.task('clean', function(callback) {
  return destDir.dirAsync('.', {
    empty: true
  });
});

gulp.task('copy', ['clean'], function() {
  return projectDir.copyAsync('own', destDir.path(), {
    overwrite: true,
    matching : [
		'own'
    ]
  });
});

gulp.task('dist', ['copy'], function() {
  return gulp.src(['./own/index.html'])
    .pipe(usemin({
      js: [uglify()]
    }))
    .pipe(gulp.dest('dist/'));
});



gulp.task('iindex', function() {
  var target = gulp.src('own/index.html');

  var simple = gulp.src(['own/**/*.css', 'own/**/*.js'], {
    read: false
  });

  var bowa = gulp.src(bowerFiles(), {
    read: false
  });

  return target
    .pipe(inject(bowa, {
      name: 'bower',
      transform: function(filepath) {
        var last = filepath.length;
        if (filepath.charAt(last - 2) == 'j')
          return "<script type='text/javascript' src='../" + filepath.substring(1) + "'></script>";
        else
          return "<link rel='stylesheet' href='../" + filepath.substring(1) + "'/>";

      }
    }))
    .pipe(inject(simple,{
      name : 'simple',
      transform: function(filepath) {
        var last = filepath.length;
        if (filepath.charAt(last - 2) == 'j')
          return "<script src='" + (filepath.substring(1)).replace('own/','') + "'></script>";
        else
          return "<link rel='stylesheet' href='" + filepath.substring(1).replace('own/','') + "'/>";

      }
    }))
    .pipe(gulp.dest('./own'));
});