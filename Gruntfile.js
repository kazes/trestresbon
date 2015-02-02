module.exports = function (grunt) {

    var pathcss = 'css/';
    //var pathico = 'icofonts/';
    var pathimg = 'img/';
    var pathjs = 'js/';
    //var pathfonts = pathcss + 'font/';
    //var pathpie = pathcss + 'pie/';
    var pathbuild = 'build/';
    var pathsrc = './';

    // LOAD NPM TASKS
    //require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: [pathsrc + pathcss + '**/*.scss'],
                tasks: ['sass'],
                options: {
                    debounceDelay: 50,
                    livereload: true,
                    spawn: false
                }
            }
        }
    });

    grunt.config('sass', {
        options: {
            style: 'expanded',
            lineNumbers: true
        },
        dist: {
            files: {
                'css/all.css': 'css/all.scss'
            }
        }
    });

    // REGISTER TAKS
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', "Builds the application.",
        ['sass:dist']);
};