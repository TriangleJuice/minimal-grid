'use strict';
module.exports = function(grunt) {

	grunt.initConfig({

		// style (Sass) compilation via Compass
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					imagesDir: 'images',
					images: 'images',
					javascriptsDir: 'js',
					fontsDir: 'fonts',
					environment: 'production',
					outputStyle: 'compact',
					relativeAssets: true,
					noLineComments: true,
					force: true
				}
			}
		},

		// watch our project for changes
		watch: {
			   options: {
				  livereload: {
					port: 8888
				  }
				},
				sass: {
					files: ['sass/*.scss'],
					tasks: ['compass'],
				},
				sass_partials: {
				 files: ['sass/partials/*.scss'],
				 tasks: ['compass'],
				}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register task
	grunt.registerTask('default', [
		'compass',
		'watch'
	]);

};
