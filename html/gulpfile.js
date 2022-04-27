const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const imagemin = import('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const del = require('del'); 
const browserSync = require('browser-sync').create();
const logSymbols = import('log-symbols');

const options = require("./config"); //paths and other options from config.js
// const { src, dest, task, watch, series, parallel } = require('gulp');
var gulp = require('gulp');

function reload(done) {
    browserSync.reload();
    done();
  } 

/* Gulp Watch Tasks */
gulp.task('html', function() {
    return gulp.src(`${options.paths.src.html}/*.html`)
    .pipe(gulp.dest(options.paths.dist.html));
})

gulp.task('css', function() {
    return gulp.src(`${options.paths.src.css}/**/*.css`)
    .pipe(postcss([
        tailwindcss(options.config.tailwindjs),
        require('autoprefixer'),
    ]))
    .pipe(concat({ path: 'style.css' }))
    // .pipe(cleanCSS())
    .pipe(gulp.dest(options.paths.dist.css))
});

/* Combine all js files into a single scripts.js */
gulp.task('scripts', function() {
    return gulp.src(`${options.paths.src.js}/*.js`)
    .pipe(concat({ path: 'scripts.js'}))
    .pipe(gulp.dest(options.paths.dist.js))
})

/* Move Images to dist */
gulp.task('images', function() {
    return gulp.src(`${options.paths.src.img}/**/*`)
    .pipe(gulp.dest(options.paths.dist.img))
});


gulp.task('watch', gulp.series(['html', 'css', 'scripts', 'images'], function() {
    gulp.watch(`${options.paths.src.base}`, gulp.series(reload));
    gulp.watch(`${options.paths.src.html}/*.html`, gulp.series(['html']));
    gulp.watch(`${options.paths.src.css}/*.css`, gulp.series(['css']));
    gulp.watch(`${options.paths.src.js}/*.js`, gulp.series['scripts']);
    gulp.watch(`${options.paths.src.img}/*/**`, gulp.series['images']);
}));