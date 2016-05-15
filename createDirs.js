'use strict';

const mkdirp = require('mkdirp');

mkdirp('/workbench/src/data', function (err) {
    if (err) {
        console.error(err);
    }
});
mkdirp('/workbench/src/es', function (err) {
    if (err) {
        console.error(err);
    }
});
mkdirp('/workbench/src/img', function (err) {
    if (err) {
        console.error(err);
    }
});
mkdirp('/workbench/src/sass', function (err) {
    if (err) {
        console.error(err);
    }
});
mkdirp('/workbench/src/temps', function (err) {
    if (err) {
        console.error(err);
    }
});
