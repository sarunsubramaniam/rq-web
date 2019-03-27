'use strict';

//gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'app/assets/sass/style.scss',
    cssDest = 'app/assets/css/';

gulp.task('sass', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task( 'default', [ 'sass' ] );
