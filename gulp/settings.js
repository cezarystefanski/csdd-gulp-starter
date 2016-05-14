'use strict';

let settings = () => {
    const bench = 'workbench/';
    const src = bench + 'src/';
    const dest = bench + 'dest/';
    const prod = bench + 'dist/';
    const tmp = bench + 'tmp/';

    let config = {
        // paths to files
        src,
        dest,
        prod,
        tmp,
        index: src + 'index.html',
        srcJs: src + 'es/*.js',
        srcJsMain: src + 'es/script.js',
        srcSass: src + 'sass/style.scss',
        srcData: src + 'data/*.json',
        srcImg: src + 'img/**/*.*',
        srcTemps: src + 'temps/**/*.html',
        tmpJs: tmp + 'js/',
        tmpJsMain: tmp + 'js/main.js',
        tmpCss: tmp + 'css/',
        tmpData: tmp + 'data/',
        tmpImg: tmp + 'img/',
        tmpTemps: tmp + 'temps/',
        destJs: dest + 'js/',
        destCss: dest + 'css/',
        destData: dest + 'data/',
        destImg: dest + 'img/',
        destTemps: dest + 'temps/',
        prodAssets: prod + 'assets/',
        prodCommon: prod + 'common/',

        // browserSync
        browserSync: {
            browserReloadDelay: 1000
        },

        // bower
        bower: {
            json: require('../bower.json'),
            dir: '../bower_components/',
            ignorePath: '../..'
        }
    };

    return config;
};

module.exports = settings;
