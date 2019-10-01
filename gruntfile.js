module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options : {
                    style: 'compressed',
                    sourcemap: 'auto',
                    //sourcemapDest: 'css/app.css.map'
                },
                files: {
                    'css/app.css' : 'sass/app.scss'
                }
            },
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
};
