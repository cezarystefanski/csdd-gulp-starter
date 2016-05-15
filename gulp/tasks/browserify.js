'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const config = require('../settings')();
const debowerify = require('debowerify');
const source = require('vinyl-source-stream');

gulp.task('browserify', () => {
    return browserify({
        entries: config.tmpJsMain
    })
        .transform(debowerify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.destJs));
});
