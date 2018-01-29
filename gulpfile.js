'use strict';
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const browserify = require('browserify');
const babel = require('babelify');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');
const uncss = require('uncss').postcssPlugin;
const concat = require('gulp-concat');
const webserver = require('gulp-webserver');
const postcss      = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const nano = require('cssnano');
const clean = require('gulp-clean');
const data = require('./src/data/index');

const PATH = {
  "DIST": "./dist",
  "TEMPLATES": "./src/templates/*.html",
  "JS": "./src/index.js",
  "IMG": "./src/assets/img/**/*",
  "FONTS": "./src/assets/fonts/**/*",
  "SASS": "./src/assets/sass/main.scss",
  "SASS_DIST": "./src/assets/css",
  "CSS": "./src/assets/css/**/*.css",
};

process.env.NODE_ENV = 'production';

gulp.task('clean', () => {
  return gulp.src(PATH.DIST, {read: false}).pipe(clean());
});

gulp.task('html', ['clean'], () => {
  gulp.src(PATH.TEMPLATES)
    .pipe(nunjucks.compile(data))
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('fonts', ['clean'], () => {
  return gulp.src(PATH.FONTS).pipe(gulp.dest(PATH.DIST + '/fonts'));
});

gulp.task('images', ['clean'], () => {
    gulp.src(PATH.IMG)
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true, max: 75}),
        imagemin.optipng({optimizationLevel: 7}),
      ]))
      .pipe(gulp.dest( PATH.DIST + '/img'));
});

gulp.task('js',['html'], () => {
  return browserify({ debug: (process.env.NODE_ENV === 'production') })
    .transform(babel)
    .require(PATH.JS, { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(PATH.DIST + "/js"));
});

gulp.task('sass',['js', 'html'], () =>
  gulp.src(PATH.SASS)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(postcss([ autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }),
      uncss({
        html: [PATH.DIST + '/*.html'],
        ignore: [/^\.fa-angle-*/,/^\.fa-external-link$/,/\.checked/,/^\.fa-book$/,/^\.fa-wrench$/,/^\.fa-check$/,/fa-ul/, /fa-li/,/^blockquote/,/^pre/,/^code/,/^em/]
      })
    ]))
    .pipe(gulp.dest(PATH.SASS_DIST ))
);

gulp.task('postcss',['sass','js'], () =>
  gulp.src(PATH.CSS)
    .pipe(concat('main.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([nano(),]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATH.DIST + "/css"))
);

/***************** DEV *******************************
 *====================================================*/
gulp.task('images-dev', () => {
  gulp.src(PATH.IMG).pipe(gulp.dest( PATH.DIST + '/img'));
});

gulp.task('js-dev',['html'], () => {
  return browserify({ debug: true })
    .transform(babel.configure({comments: false}))
    .require(PATH.JS, { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(PATH.DIST + "/js"));
});


gulp.task('build', [
  'clean',
  'html',
  'fonts',
  'images',
  'js',
  'sass',
  'postcss',
]);

// Server tasks with watch
gulp.task('dev', [
  'clean',
  'html',
  'fonts',
  'js-dev',
  'images-dev',
  'sass',
  'postcss'
]);

gulp.task('webserver', function() {
  gulp.src(PATH.DIST)
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8080,
    }));
});