// ------------------------------------------------------------------------
// Gruntfile
// ------------------------------------------------------------------------

module.exports = function(grunt) {
  "use strict"

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    closure: {
      start: "!function() {\n",
      end: "}()"
    },


    // --------------------------------------------------------------------
    // Grunt Tasks
    // --------------------------------------------------------------------

    babel: {
      js: {
        files: {
          "<%= concat.docs.dest %>" : "<%= concat.docs.dest %>",
          "<%= concat.home.dest %>" : "<%= concat.home.dest %>"
        }
      }
    },
    clean: {
      js: ["<%= concat.docs.dest %>", "<%= concat.home.dest %>"]
    },
    concat: {
      docs: {
        src: ["src/js/util/breakpoints.js",
              "src/js/util/jquery-extensions.js",
              "src/js/util/jss.js",
              "src/js/docs/header.js",
              "src/js/docs/mainContent.js",
              "src/js/docs/search.js",
              "src/js/docs/sidemenu.js",
              "src/js/docs/init.js"
             ],
        dest: "src/js/docs.js"
      },
      home: {
        src: ["src/js/util/jquery-extensions.js",
              "src/js/code.js",
              "src/js/home/templates.js",
              "src/js/home/examples/*.js",
              "src/js/home/init.js"
             ],
        dest: "src/js/home.js"
      }
    },
    eslint: {
      target: ["src/js/**/*.js"]
    },
    sass: {
      options: {
        outputStyle: "compressed"
      },
      source: {
        files: {
          "source/css/docs.css" : "src/scss/docs/master.scss",
          "source/css/home.css" : "src/scss/home/master.scss"
        }
      }
    },
    stamp: {
      home: {
        options: {
          banner: "<%= closure.start %>",
          footer: "<%= closure.end %>"
        },
        files: {
          src: "<%= concat.home.dest %>"
        }
      }
    },
    uglify: {
      docs: {
        src: "<%= concat.docs.dest %>",
        dest: "source/js/docs.js",
      },
      home: {
        src: "<%= concat.home.dest %>",
        dest: "source/js/home.js",
      }
    }
  })

  require("load-grunt-tasks")(grunt)
  require("time-grunt")(grunt)

  grunt.registerTask("default", ["eslint", "concat", "babel", "stamp", "uglify", "sass", "clean"])
  grunt.registerTask("lint", ["eslint"])
}
