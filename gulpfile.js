var gulp = require('gulp');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');

// var ENV = process.env.ENV;
//
// if (!ENV || (!(ENV == 'mobile' || ENV == 'web'))) {
//     console.error("ERROR: You don't specify or incorrectly specify a variable ENV (must be 'web' or 'mobile'). For example: 'ENV=web gulp watch'");
//     return false;
// }

var paths = {
    sass: ['./dev/sass/**/*.scss'],
    templatecache: ['./dev/js/**/*.html'],
    index:['./dev/index.html']
};

gulp.task('default', ['sass', 'templatecache']);

gulp.task('watch', ['sass', 'templatecache', 'index', 'connect'], function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch('./www/*.js', ['reload']);
    gulp.watch(paths.templatecache, ['templatecache']);
    gulp.watch(paths.index, ['index', 'reload']);
});

gulp.task('sass', function(done) {
    gulp.src('./dev/sass/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .pipe(connect.reload())
        .on('end', done);
});


gulp.task('reload', function (done) {
    gulp.src(['./www/*.js'])
        .pipe(connect.reload())
        .on('end', done);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('templatecache', function (done) {
    gulp.src(['./dev/js/**/*.html'])
        .pipe(templateCache({standalone:true}))
        .pipe(gulp.dest('./dev/js'))
        .on('end', done);
});

gulp.task('index', function (done) {
    gulp.src(['./dev/index.html'])
        .pipe(gulp.dest('./www'))
        .on('end', done);
});

