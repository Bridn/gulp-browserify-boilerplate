'use strict';

export default {

  sourceDir: './app/assets/',
  buildDir: './web/assets/',

  styles: {
    src: './app/assets/scss/**/*.scss',
    dest: './web/assets/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: './app/assets/js/**/*.js',
    dest: './web/assets/js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: './app/assets/img/**/*',
    dest: './web/assets/img'
  },

  svg: {
    src: './app/assets/svg/**/*',
    dest: './web/assets/svg'
  },

  logos: {
    src: './app/assets/logos/**/*',
    dest: './web/assets/svg'
  },

  pdf: {
    src: './app/assets/pdf/**/*',
    dest: './web/assets/pdf'
  },

  videos: {
    src: './app/assets/videos/**/*',
    dest: './web/assets/videos'
  },

  views: {
    src: './app/templates/**/*',
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

};