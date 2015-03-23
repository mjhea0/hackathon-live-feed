module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);



  grunt.initConfig({

    watch:{
      markup : {
        files:["client/views/**","client/public/js/*"],
        tasks:["default"],
        options: {
          livereload: true,
        }
      },
      scripts : {
        files:["client/public/js/*.js"],
        tasks:["jshint"]
      }

    },

    jshint:{
      files: ["client/public/js/*.js"],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    nodemon: {
      dev: {
        script: "./server/bin/www",
        env: {
          PORT: "3000"
        }
      }
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    mochaTest: {
      test: {
        reporter: 'spec',
        src: './test/*.js'
      }
    },

  });

  grunt.registerTask("test",["karma:unit","mochaTest:test"]);

  grunt.registerTask("default", function () {
    grunt.log.writeln("File change detected");
  });
};
