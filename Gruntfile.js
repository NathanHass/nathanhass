/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    responsive_images: {
      build: {
        options: {
          separator: '-',
          sizes: [{
            name: 'small',
            width: 320,
            quality: 90,
            upscale: false
          },{
            name: 'small',
            width: 640,
            suffix: "_x2",
            quality: 45,
            upscale: false
          },{
            name: 'medium',
            width: 720,
            quality: 90,
            upscale: false
          },{
            name: 'medium',
            width: 1440,
            suffix: "_x2",
            quality: 45,
            upscale: false
          },{
            name: 'large',
            width: 1024,
            quality: 90,
            upscale: false
          },{
            name: 'large',
            width: 2048,
            suffix: "_x2",
            quality: 45,
            upscale: false
          },{
            name: 'huge',
            width: 1600,
            quality: 90,
            upscale: false
          },{
            name: 'huge',
            width: 2048,
            suffix: "_x2",
            quality: 45,
            upscale: false
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/raw_img',
          dest: 'build/img/'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['src/**'],
        tasks: ['refresh'],
        options: {
          spawn: false,
        },
      },
    },

    copy: {
      base: {
        files: [{
          expand: true,
          cwd: 'src/php',
          src: ['**'],
          dest: 'build/',
          filter: 'isFile'
        },{
          expand: true,
          cwd: 'src/js',
          src: ['*.js'],
          dest: 'build/js/',
          filter: 'isFile'
        },{
          expand: true,
          cwd: 'src/img',
          src: ['**'],
          dest: 'build/img/'
        },/*{
          expand: true,
          cwd: 'src/raw_img',
          src: ['**'],
          dest: 'build/img/'
        },*/{
          expand: true,
          cwd: 'components',
          src: ['**'],
          dest: 'build/js/'
        }]
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task.
  grunt.registerTask('default', ['refresh', 'watch']);
  grunt.registerTask('refresh', ['copy', 'compass']);
  grunt.registerTask('build_images', ['responsive_images']);

};