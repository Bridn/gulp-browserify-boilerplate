'use strict';

import gulp   from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "mywebsite.dev"
        open:  false
    });
});
