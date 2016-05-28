'use strict';

import config from '../config';
import gulp   from 'gulp';
import browserSync from 'browser-sync';

gulp.task('watch', ['browserSync'], function() {

  global.isWatching = true;

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.svg.src,  ['svg']);
  gulp.watch(config.logos.src,  ['logos']);
  gulp.watch(config.pdf.src,  ['pdf']);
  gulp.watch(config.views.src).on('change', browserSync.reload);

});