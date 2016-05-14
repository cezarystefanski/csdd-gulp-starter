'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const transform = require('vinyl-transform');
const config = require('../settings')();
const debowerify = require('debowerify');

gulp.task('browserify', () => {
    let browserified = transform(filename => {
        let b = browserify(filename)
            .transform(debowerify);
        return b.bundle();
    });

    return gulp.src(config.srcJs)
        .pipe(browserified)
        .pipe(gulp.dest(config.tmpJs));
});
