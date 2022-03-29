

import gulp from 'gulp' ;
/*import image from 'gulp-image';*/
import cssmin from 'gulp-cssmin';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';



gulp.task('cssmin', () => (
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'])
    .pipe(concat('styles.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
));

gulp.task('uglify', () => (
     gulp.src([
         './node_modules/jquery/dist/jquery.js',
         './node_modules/bootstrap/dist/js/bootstrap.js',
         './vendor/owl/js/owl.js',
         './vendor/jquery-mask/jquery.mask.min.js',
         './vendor/jquery-ui/jquery-ui.js',
         './src/js/custom.js'
     ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
));

gulp.task('imagem', async () => (
    gulp.src('./src/images/*')
        .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('/dist/images'))   
));

/*gulp.task('default', gulp.series(['cssmin', 'uglify', 'imagem']))*/
gulp.task('default', gulp.parallel(['cssmin', 'uglify', 'imagem']))
