"use strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
      less: {
        style: {
          files: {
            "build/css/style.css": "less/style.less"
          }
        }
      },

      postcss: {
        style: {
          options: {
            processors: [
              require("autoprefixer")({browsers: [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
              ]})
            ]
          },
          src: "build/css/*.css"
        }
      },

      csso: {
        style: {
          options: {
            report: "gzip"
          },
          files: {
            "build/css/style.min.css": ["css/style.css"]
          }
        }
      },

      imagemin: {
        images: {
          options: {
            optimizationLevel: 3
          },
          files: [{
            expand: true,
            src: ["build/img/**/*.{png,jpg,gif}"]
          }]
        }
      },

      clean: {
        build: ["build/**"]
      },

      copy: {
        build: {
          files: [{
            expand: true,
            src: [
              "fonts/**/*.{woff,woff2}",
              "img/**",
              "js/**",
              "*.html"
            ],
            dest: "build"
          }]
        },
        html: {
          files: [{
            expand: true,
            src: ["*.html"],
            dest: "build"
          }]
        }
      },

      browserSync: {
        server: {
          bsFiles: {
            src: [
              "build/*.html",
              "build/css/*.css"
            ]
          },
          options: {
            server: "build",
            watchTask: true,
            notify: false,
            open: true,
            ui: false
          }
        }
      },

      watch: {
        style: {
          files: ["build/less/**/*.less"],
          tasks: ["less", "postcss", ""],
          options: {
            spawn: false
          }
        },
        html: {
          files: ["*.html"],
          tasks: ["copy:html"]
        }
      },

      uglify: {
        options: {
          mangle: false
        },
        jsmini: {
          files: [{
            expand: true,
            src: "js/**/*.js",
            dest: "build"
          }]
        }
      },

      replace: {
        inline: {
          src: ["build/*.html"],
          dest: "build/",
          replacements: [{
            from: "css/style.css",
            to: "css/style.min.css"
          }]
        }
      }

    });

    grunt.registerTask("serve", ["browserSync", "watch"]);
    grunt.registerTask("deploy", ["less", "postcss"]);
    grunt.registerTask("build", [
      "clean",
      "copy",
      "less",
      "postcss",
      "csso",
      "uglify",
      "imagemin",
      "replace"
    ]);
}
