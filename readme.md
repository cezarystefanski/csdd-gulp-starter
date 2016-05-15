# csdd-gulp-starter
An attempt to create a gulp starter and boilerplate for html projects tailored to my needs. Also to train some gulp.

**What's in?**

+ nothing much yet
+ much to come
+ todo sass with useful mixins, browser-sync, es-lint, some useful js tools, etc.


**Usage**

+ `gulp` and `bower` needed
``` javascript
npm install
```
+ Get any bower component you want, e.g:
``` javascript
bower install --save jquery
```
+ and require it in your js file, just like you would a module
``` javascript
let $ = require('jquery');
```
+ create some structure
``` javascript
npm createDirs.js
```
+ The rest will be done for you.

**Changelog**
+ 0.0.4
Babel added.
+ 0.0.3
Added browserify and debowerify. 
+ 0.0.2
Added gulp task structure and esLint code checking.
+ 0.0.1
Creation and setup. Not working or anything yet.
