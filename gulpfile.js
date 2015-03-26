var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('uncss', function() {
    return gulp.src('_assets/stylesheets/*')
        .pipe(uncss({
            html: ['index.html', 'referrals/index.html', 'blog/index.html', '_includes/footer.html','_includes/head.html','_includes/loader.html', '_includes/navbar.html', '_layouts/blog_single.html', '_layouts/default.html', '_layouts/how_it_works.html'],
            ignore: ['.nav-sticky', '.top-bar.nav-sticky', '#tweets .user', '#tweets .interact', '.slides','.sidebar-widget a.active','.article-body h2', '.article-body p','p a', '.blog-snippet-3 h1 a em', '.overlay-bar.nav-sticky .social-icons li a', '.overlay-bar.nav-sticky .menu li a', '.overlay-bar.nav-sticky .logo-dark','.overlay-bar.nav-sticky .logo-light', '.nav-sticky .logo', '.open-nav']
        }))
        .pipe(gulp.dest('./_uncss'));
});
