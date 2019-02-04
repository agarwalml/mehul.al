const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const merge = require('merge-stream');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const uglify = require('gulp-uglify-es').default;
const webserver = require('gulp-webserver');

gulp.task('pug', () => {
	return gulp.src('src/pug/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('styl', () => {
	const plugins = [
		autoprefixer(),
		cssnano()
	];
	return gulp.src('src/styl/index.styl')
		.pipe(stylus({compress: true}))
		.pipe(postcss(plugins))
		.pipe(gulp.dest('dist/assets/css'));
});

gulp.task('js', () => {
	const presets = [
		['@babel/env', {targets: {browsers: ['> 75%']}}]
	];
	return gulp.src('src/js/*.js')
		.pipe(concat('index.js'))
		.pipe(babel({presets}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/js'));
});

gulp.task('binaries', () => {
	const paths = {
		'src/img/**/*': 'dist/assets/img',
		'src/fonts/*': 'dist/assets/fonts',
		'src/docs/*': 'dist/assets/docs'
	};

	return merge(Object.entries(paths).map(([from, to]) =>
		gulp.src(from).pipe(gulp.dest(to))
	));
});

gulp.task('clean', () => {
	return del([
		'dist/assets/css/*',
		'dist/assets/js/*'
	]);
});

gulp.task('webserver', () => {
	return gulp.src('dist')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('watch', () => {
	gulp.watch('src/pug/**/*.pug', gulp.parallel('pug'));
	gulp.watch('src/styl/**/*.styl', gulp.series('styl'));
	gulp.watch('src/js/*.js', gulp.series('js'));
});

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel(
		'pug', 'styl', 'js', 'binaries'
	)
));

gulp.task('default', gulp.series('build', 'webserver', 'watch'));
