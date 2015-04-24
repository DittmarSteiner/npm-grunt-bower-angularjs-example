# npm-Grunt-Bower-AngularJS Example
*You just want to implement some User Stories…*

## Table of Contents

  1. [Introduction](#introduction)
  1. [Prerequesites](#prerequesites)
  1. [Setup a Project](#setup-a-project)
    1. [The Easy Way](#the-easy-way)
    1. [From Scratch](#from-scratch)
  1. [Branches](#branches)
  1. [Contributors](#contributors)
  1. [License](#license)

## Introduction

  This example demonstrates the quick setup of an [AngularJS](https://angularjs.org/) project to get you productive as quick as possible.  
  The technology used here is only an example, use your favorite tools for your development cycle  
  **implement, test, build, deploy**.  
  *("deploy" is not covered here)*

**[⬆ back to top](#table-of-contents)**

## Prerequesites

  - **Install nodejs**

    *The following will install the latest version of* **`nodjs`** *and includes* **`npm`** *already*.
  
        $ curl -sL https://deb.nodesource.com/setup | sudo bash -
        $ sudo apt-get install nodejs
        $ sudo apt-get install build-essential # optional!

  - **Build tools**, globally

        $ sudo npm install -g grunt
        $ sudo npm install -g grunt-cli
        $ sudo npm install -g bower

**[⬆ back to top](#table-of-contents)**

## Setup a Project

### The Easy Way

  1. **Git clone** this or a similar project.

        $ git clone ... # please, refer to 'clone URL' on this page
        $ cd npm-grunt-bower-angularjs-example
    
  1. **Based on `package.json`**:

        $ npm install

  1. **Based on `bower.json`**:

        $ bower install

  1. **Test**
  
    Best run this from an extra terminal:
    
        $ python -m SimpleHTTPServer 12345
    Run your tests!
    
        $ grunt test

  1. **Build**

    To just build the project for deployment simply run
  
        $ grunt
    which will populate the `public/js` directory for deployment.

*Note that the directories* `node_modules/`*,* `bower_components/` *and *`public/js/vendor`*should be added to* `.gitignore`*.*

**Now edit all files as you like and don't forget to replace the Git repository!**

**[⬆ back to top](#table-of-contents)**

### From Scratch

  1. **Create**

        $ npm init
    Creates `package.json`.
    Then add the build components
  
        $ npm install grunt --save
        $ npm install grunt-cli --save
        $ npm install grunt-contrib-copy --save
        $ npm install grunt-protractor-webdriver --save
        $ npm install grunt-protractor-runner --save
        $ npm install selenium-webdriver --save
        $ npm install bower --save
    This creates and populates the directory `node_modules/`.

    Execute postinstall
    
        $ ./node_modules/protractor/bin/webdriver-manager update --standalone
    
    
    To make the project's tests re-usable, open `package.json` and add the `postinstall` to the `scripts` section:
    ```javascript
    "scripts": {
      ... ,
      "postinstall": 
        "node_modules/protractor/bin/webdriver-manager update --standalone"
    }
    ```
    Now init the JavaScript management:
  
        $ bower init
    This creates the file `bower.json`.
    
    At last add your desired JavaScript components, e.g.
  
        $ bower install angularjs --save
    This creates and populates the directory `bower_components/angularjs/`.
    
    Create two files:
    
    - *`public/index.html`*
      
	    ```html
	    <!DOCTYPE html>
	    <html>
	      <head>
	        <title>AngularJS-npm-Grunt-Bower Example</title>
	        <meta charset="UTF-8">
	        <script src="js/vendor/angular.min.js"></script>
	        <script src="js/main.js"></script>
	      </head>
	      <body ng-app="app">
	        <div ng-controller="MainCtrl as ctrl">    
	          <form>
	            <label>Name</label>
	            <input type="text" ng-model="ctrl.customer.name">
	          </form>
	          
	          Hello {{ ctrl.customer.name }}
	        </div>
	      </body>
	    </html>
	    ```
    
    - *`public/js/main.js`*
      
	    ```javascript
	    ( function () {
	      'use strict';
	
	      angular.module ( 'app', [ ] )
	        .controller ( 'MainCtrl', function () {
	          var self = this;
	          self.customer = {
	            name: 'Lukas'
	          };
	        } );
	    } )
	    ();
	    ```


  1. **Test**

    Create two files:
    
    - *`test/conf.js`*
      
        ```javascript
        exports.config = {
          seleniumAddress: 'http://localhost:4444/wd/hub',
          specs: ['spec.js' ]
        };
        ```
    
    - *`test/spec.js`*
      
	    ```javascript
        describe ( 'Homepage test', function () {

          beforeEach ( function () {
            browser.get ( 'http://localhost:12345/public/index.html' );
          } );

          it ( 'The Jedi\'s name should be Lukas', function () {
            expect(
                element(
                    by.model ( 'ctrl.customer.name' )
                ).evaluate('ctrl.customer.name')
              ).toEqual ( "Lukas" );
          } );

        } );
	    ```

    Best run this from an extra terminal:
    
        $ python -m SimpleHTTPServer 12345
    Run your tests!
    
        $ grunt test

  1. **Build**

    To just build the project for deployment simply run
  
        $ grunt
    which will populate the `public/js` directory for deployment.

*Note that the directories* `node_modules/`*,* `bower_components/` *and *`public/js/vendor`*should be added to* `.gitignore`*.*

**[⬆ back to top](#table-of-contents)**

## Where to go from here?

- [nodejs.org](https://nodejs.org/)
- [npmjs.com](https://www.npmjs.com/)
- [gruntjs.com](http://gruntjs.com/)
- You will find dozens of Grunt tasks under [github.com/gruntjs](https://github.com/gruntjs/) like
  - [grunt-contrib-compress](https://github.com/gruntjs/grunt-contrib-compress)
  - [grunt-contrib-cssmi](https://github.com/gruntjs/grunt-contrib-cssmin)
  - [grunt-contrib-uglif](https://github.com/gruntjs/grunt-contrib-uglify)
- [bower.io](http://bower.io/)
  - [angularjs.org](https://angularjs.org/)
  - [getbootstrap.com](http://getbootstrap.com/) via `$ bower install bootstrap --save`

**[⬆ back to top](#table-of-contents)**


## [Branches](https://github.com/DittmarSteiner/npm-grunt-bower-angularjs-example/branches)


  - `master`: Full example including tests

  - `full`: Same as `master`

  - `simple`: Without tests

**[⬆ back to top](#table-of-contents)**

## Contributors

  - [View Contributors](https://github.com/DittmarSteiner/npm-grunt-bower-angularjs-example/graphs/contributors)

**[⬆ back to top](#table-of-contents)**

## License

\([ISC License](http://opensource.org/licenses/isc-license.txt)\)

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

**[⬆ back to top](#table-of-contents)**

