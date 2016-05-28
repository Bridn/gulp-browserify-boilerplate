'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';

gulp.task('pdf', function() {

  return gulp.src(config.pdf.src)
    .pipe(changed(config.pdf.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.pdf.dest));

});