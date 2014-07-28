![alt tag](https://travis-ci.org/jonny2779/AngularTestStarter.svg?branch=master)
AngularTodo
===========

An app to test out basic AJS along with Jasmine 2.0, Karma 0.12, Karma-Jasmine 0.2.2 and Travis.

This project started with a great post at http://andyshora.com/unit-testing-best-practices-angularjs.html

This is how to set up your machine with this testing framework.

```
How to get testing working for JS and AJS

Install Jasmine by copying the files from here…

https://github.com/pivotal/jasmine/releases

lib is the folder that has the src of jasmine that you need.
spec has your tests in it.
src has your code in it.

Run the tests manually with SpecRunner.html.
(All files that you make and test need to be added to this file in order to be tested.)

Install Karma

npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher --save-dev
npm install karma-jasmine@2_0 --save-dev (!!! super important https://github.com/karma-runner/karma-jasmine)

npm install -g karma-cli (ONCE Per dev only)

karma init
<enter>
<enter>
<enter> 
<enter> 
spec/*Spec.js
<enter> 
<enter> 

karma start (leave this open while you code in a terminal window)

karma run

Travis
Go to the Travis settings and enable travis for the repo. You will have to pay with Bill’s account

add .travis.yml to the repo with:

language: node_js
node_js:
  - 0.10
before_script:
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start

```
add a package.json file with:
```

{
  "name": "AngularTestStarter",
  "branchVersion": "1.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/jonny2779/AngularTodo.git"
  },
  "devDependencies": {
    "karma": "~0.12.0",
    "karma-jasmine": "^0.2.2"
  },
  "scripts": {
    "test": "karma start --single-run --browsers PhantomJS"
  }
}

```

```
Run npm install

Then add the build image to the readme (i.e. ![alt tag](https://travis-ci.org/jonny2779/AngularTestStarter.svg?branch=master))

```
 
##Sample Karma.conf.js file

```
// Karma configuration
// Generated on Sun Jul 27 2014 15:35:50 GMT-0300 (ADT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'src/*.js',
        'spec/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};

```

#How to run the tests...

```
In terminal run: karma start

In another terminal hit: karma run

Note: The tests will also run automatically in the first window everytime you save
```





