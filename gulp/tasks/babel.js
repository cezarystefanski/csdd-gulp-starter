'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const config = require('../settings')();

gulp.task('babel', () => {
    return gulp.src(config.srcJs)
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest(config.tmpJs));
});
