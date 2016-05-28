'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('svg', function() {

  return gulp.src(config.svg.src)
    .pipe(changed(config.svg.dest)) // Ignore unchanged files
    .pipe(imagemin({
    	svgoPlugins: [
            {removeViewBox: false},
            {removeUselessStrokeAndFill: true},
            {cleanupIDs: true}
        ]
    })) // Optimize
    .pipe(gulp.dest(config.svg.dest))
    .pipe(browserSync.stream());

});