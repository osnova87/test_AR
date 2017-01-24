var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['sass'])
});