const gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    order = require('gulp-order'),
    concat = require('gulp-concat'),
    webpack = require('gulp-webpack'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-htmlmin'),
    //notify = require('gulp-notify'),
    clean = require('gulp-clean'),
    livereload = require('gulp-livereload')

gulp.task('scripts', () => {
    gulp.src('src/js/*.js')
        .pipe(webpack(require('./webpack.config.js')))
       // .pipe(webpack({config:'./webpack.config.js', watch: true}))
        .pipe(gulp.dest('dist/js'))
        //.pipe(notify({ message: 'scripts task completed' }))
    // .pipe(rename({suffix:'.min'}))
    // .pipe(uglify())
    //.pipe(gulp.dest('dist/js'))
})

gulp.task('styles', () => {
    return gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('dist/css'))
       // .pipe(notify({ message: 'styles task completed' }))
})

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(minifyHtml({
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
       // .pipe(notify({message: 'html task completed'}))
})

gulp.task('clean', ()=>{
    return gulp.src(['dist/js', 'dist/css','dist/**/*.html'])
        .pipe(clean())
})

gulp.task('default', ['clean'], ()=>{
    gulp.start('styles','scripts', 'html')
} )

gulp.task('watch', () =>{
    gulp.watch('src/css/**/*.css', ['styles'])

    gulp.watch('src/js/*.js', ['scripts'])

    gulp.watch('src/*.html', ['html'])

    livereload.listen();

    gulp.watch('dist/**/*.*',function (file) {
        livereload.changed(file.path)
    } )
})