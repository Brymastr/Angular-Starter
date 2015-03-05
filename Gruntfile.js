/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      app: {
        src: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/components/**/*.js',
          'app/shared/**/*.js'
        ],
        dest: 'public/app.js'
      },
      angular: {
        src: [
          'bower_components/angular/angular.js',
          'bower_components/angular-animate/angular-animate.js',
          'bower_components/angular-route/angular-route.js'
        ],
        dest: 'public/angular.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        src: 'public/app.js',
        dest: 'public/app.min.js'
      },
      angular: {
        src: 'public/angular.js',
        dest: 'public/angular.min.js'
      }
    },
    copy: {
      app: {
        files: [
          {
            expand: true,
            src: [
              'app/components/**/*.html',
              'app/shared/**/*.html'
            ],
            dest: 'public/views',
            filter: 'isFile',
            flatten: true
          }
        ]
      }
    },
    auto_install: {
      local: {}
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-auto-install');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'copy']);
  grunt.registerTask('install', 'auto_install');

};
