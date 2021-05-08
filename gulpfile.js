const gulp = require('gulp');
const bundle = require('@lernetz/gulp-typescript-bundle');
gulp.task(
	'bundle',
	bundle({
		dest: 'bundle',
		src: 'src/index.ts',
		name: 'bundle',
		rollup: {
			outputOptions: {
				sourcemap: true
			}
		}
	})
);

gulp.task('default', () => gulp.series('bundle'));

gulp.task('dev', () => gulp.watch('src/**/*.ts', gulp.series('bundle')));
