'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('logos', function() {

  return gulp.src(config.logos.src)
    .pipe(changed(config.logos.dest)) // Ignore unchanged files
    .pipe(imagemin({
    	svgoPlugins: [
            {removeViewBox: false},
            {removeUselessStrokeAndFill: true},
            {cleanupIDs: true}
        ]
    })) // Optimize
    .pipe(gulp.dest(config.logos.dest))
    .pipe(browserSync.stream());

});