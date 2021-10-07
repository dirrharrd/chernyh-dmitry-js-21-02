const gulp = require('gulp');
const less = require('gulp-less');
//const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

//gulp.task('sass', function (done) {
//    gulp.src('./homework_03/scss/**/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./homework_03/scss/'))
//   done();
//})

//gulp.task('sass:watch', function () {
//    gulp.watch('./homework_03/scss/**/*.scss', gulp.series('sass'))
//})

//gulp.task('default', gulp.parallel('sass:watch', 'serve'))

gulp.task('less', function (done) {
    gulp.src('./homework_04/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./homework_04/less/'))
    done();
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './homework_04/'
        },
        port: 3000
    })
    gulp.watch('./**/*').on('change', browserSync.reload)
})

gulp.task('less:watch', function () {
    gulp.watch('./homework_04/less/**/*.less', gulp.series('less'))
})

gulp.task('build', function (done) {
    gulp.src('./homework_04/less/styles.css')
        .pipe(postcss([cssnano]))
        .pipe(gulp.dest('./build/'))
    done();
})


gulp.task('default', gulp.parallel('less:watch', 'serve'))

