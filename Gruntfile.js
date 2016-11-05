module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            styles: {
                files: [{
                    expand: true,
                    cwd: 'assets/sass',
                    src: '**/*.scss',
                    ext: '.css',
                    dest: 'assets/css'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'assets/css/*.css',
                        './*.html'
                    ],
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks:['sass']
            },
            fonts: {
                files: '**/*.svg',
                tasks:['webfont']
            }
        },
        webfont: {
            icons: {
                src: 'assets/svg/*.svg',
                dest: '/fonts',
                destCss: '/assets/sass',
                options: {
                    font: "db_icons",
                    stylesheet: "scss",
                    htmlDemo: true,
                    destHtml: 'assets/fonts',
                    engine: 'node',
                    autoHint: false,
                    templateOptions: {
                        baseClass: 'db',
                        classPrefix: 'icon-'
                    }
                }
            }
        },
        sass_globbing: {
            your_target: {
              files: {
                'assets/sass/_components.scss': 'assets/sass/components/**/*.scss',
                'assets/sass/_utilities.scss': 'assets/sass/utilities/**/*.scss',
              },
              options: {
                useSingleQuotes: true,
              }
            }
        }
    });

   grunt.registerTask('watcher', ['browserSync', 'sass', 'watch', 'sass_globbing']);
   grunt.registerTask('font', ['webfont' ]);

}