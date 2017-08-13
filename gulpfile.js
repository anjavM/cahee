var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');




gulp.task('sass', function (){
    return sass('./scss/style.scss', {
        style: 'compressed',
        sourcemap: true
    })
        .on('error', sass.logError)
        .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream:true}));
});

//gulp.task('babel', function() {
//  var JSpath = 'js/app.js';
//  var bundler = browserify(JSPath)
//                .transform('babelify', {
//                  presets : [ 'es2015' ]
//});

//bundler.bundle().on('error', function(err) {
//    console.error('[browserify error]', err.message);
//  }).pipe(source('bundle.js'))
//    .pipe(gulp.dest('js'));
//});

gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

gulp.watch('./scss/**/*.scss', ['sass']);
gulp.watch('./index.html', browserSync.reload);
gulp.watch('./js/app.js', browserSync.reload);

});