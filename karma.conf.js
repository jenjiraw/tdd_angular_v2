// Karma configuration
// Generated on Tue Jun 25 2013 13:36:03 GMT+0700 (SE Asia Standard Time)

module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    // If putting '', it is folder that we keep Karma.conf.js file
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    // libraries
    // call load angular before other js which dependent on angular
    'static/js/lib/angular.min.js',
    'static/js/lib/*.js',
    
    // our app
    'static/js/*.js',

    // tests ==> need to name all tests into folder name "specs"
    'specs/*',

    // templates
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use --> when calling Karma start the sign will appear in cmd
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    // If "true", when file is changed/saved Karma will rerun the test automatically
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
