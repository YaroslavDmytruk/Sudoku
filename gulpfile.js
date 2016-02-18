var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    cssnano = require('gulp-cssnano'),
    htmlhint = require("gulp-htmlhint"),
    csslint = require('gulp-csslint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    swig = require('gulp-swig');

gulp.task('html', function () {
    gulp.src('client/template/index.html')
        .pipe(swig({defaults: { cache: false }}))
        .pipe(htmlhint())
        .pipe(gulp.dest('build/'));
});

gulp.task('css', function () {
    return gulp.src('client/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(uncss({
        //   html: ['build/index.html', 'build/**/*.html']
        //}))
        .pipe( postcss([ require('autoprefixer'), 
            require('postcss-focus'), 
            require('postcss-discard-comments')]) )
        // .pipe(csslint())
        // .pipe(csslint.reporter())
        .pipe(cssnano())
        .pipe( gulp.dest('build/') );
});

gulp.task('js', function () {
    return gulp.src('client/js/partials/*.js')
        .pipe(concat('all.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('build/'));
});

gulp.task("build", ["css","html","js"]);

gulp.task('default', ["build"], function () {
    gulp.watch('client/scss/**/*.scss', ['css']);
    gulp.watch('client/template/**/*.html', ['html']);
    gulp.watch('client/js/**/*', ['js']);
});