'use strict'
const gulp = require('gulp')
const gutil = require('gulp-util')
const nodemon = require('gulp-nodemon')
const rollup = require('rollup-stream')
const source = require('vinyl-source-stream')

gulp.task('compile', function() {
  const stream = rollup({
    entry: './src/index.js'
  })
  .pipe(source('index.js'))
  .pipe(gulp.dest('./dist'))
  return stream
})

gulp.task('watch', ['compile'], function() {
  const stream = nodemon({
    script: 'dist/',
    watch: 'src',
    tasks: ['compile']
  })
  return stream
})
