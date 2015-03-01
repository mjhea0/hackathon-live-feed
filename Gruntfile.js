module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-watch");

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
        files:["client/public/js/*"], 
        tasks:["jshint"]
      }

    },

    jshint:{
      files: ["client/public/js/*"],
      options: {
        globals: {
          jQuery: true
        }
      }
    }

  })

  grunt.registerTask("default", function () {
    grunt.log.writeln("File change detected");
  })
};