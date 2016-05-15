'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const settings = require('../settings')();

gulp.task('babel', () => {
    return gulp.src(settings.srcJs)
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest(settings.tempJs));
});
