"use strict";

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  global.isProd = false;

  runSequence(
  	//['styles', 'images', 'svg', 'logos', 'videos'],
  	//'pdf',
  	'browserify',
  	'watch',
  	cb);
});