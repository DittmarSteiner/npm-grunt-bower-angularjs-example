/*
 Copyright (c) 2015, Dittmar Steiner <dittmar.steiner@gmail.com>

 Permission to use, copy, modify, and/or distribute this software for any
 purpose with or without fee is hereby granted, provided that the above
 copyright notice and this permission notice appear in all copies.

 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
module.exports = function ( grunt ) {

  // Project configuration
  grunt.initConfig ( {
    pkg: grunt.file.readJSON ( 'package.json' ),
    copy: {
      main: {
        files: [
          {src:'bower_components/angularjs/angular.min.js', dest:'public/js/vendor/angular.min.js'},
          {src:'bower_components/angularjs/angular.min.js.map', dest:'public/js/vendor/angular.min.js.map'}        
        ]
      }
    },

    // Test related...
    protractor_webdriver: {
      options: {
        keepAlive: false // ends the java process after execution, default is false
      },
      e2eStart: {
          options: {
            path: 'node_modules/protractor/bin/',
            command: 'webdriver-manager start --standalone'
          }
      }
    },
    protractor: {
      options: {
        configFile: "test/conf.js", // Default config file 
        keepAlive: false, // If false, the grunt process stops when the test fails. 
        noColor: false // If true, protractor will not use colors in its output. 
      },
      run: {
      }
    }
  } );

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks ( 'grunt-contrib-copy' );

  // Test tasks
  grunt.loadNpmTasks ( 'grunt-protractor-webdriver' );
  grunt.loadNpmTasks ( 'grunt-protractor-runner' );

  // Default task(s).
  grunt.registerTask ( 'default', [ 'copy' ] );
  // Test task(s).
  grunt.registerTask ( 'test', [ 'copy' , 'protractor_webdriver:e2eStart', 'protractor:run'] );
};
