'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';

gulp.task('videos', function() {

  return gulp.src(config.videos.src)
    .pipe(changed(config.videos.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.videos.dest));

});