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
        dest: 'public/app.min.js'
      },
      actions: {
        src: 'assets/js/*.js',
        dest: 'public/js/main.min.js'
      },
      angular: {
        src: [
          'bower_components/angular/angular.js',
          'bower_components/angular-animate/angular-animate.js',
          'bower_components/angular-route/angular-route.js'
        ],
        dest: 'public/angular.min.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        src: 'public/app.min.js',
        dest: 'public/app.min.js'
      },
      angular: {
        src: 'public/angular.min.js',
        dest: 'public/angular.min.js'
      },
      actions: {
        src: 'public/js/main.min.js',
        dest: 'public/js/main.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: {
          'public/css/style.css': 'assets/scss/main.scss'
        }
      }
    },
    copy: {
      app: {
        options: {
          flatten: true
        },
        files: [
          {
            expand: true,
            src: [
              'app/components/**/*.html',
              'app/shared/**/*.html'
            ],
            dest: 'public/views',
            flatten: true
          }, {
            expand: true,
            src: 'app/index.html',
            dest: 'public/',
            flatten: true
          }, {
            expand: true,
            src: 'assets/img/*',
            dest: 'public/img/',
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
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'copy']);
  grunt.registerTask('install', 'auto_install');

};
