// Karma configuration
// Generated on Mon Oct 17 2016 13:31:30 GMT-0600 (CST)

var webpackConfig = require('./webpack.config.test.js')

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['tap'],
    reporters: ['tap-pretty'],
    tapReporter: {
      prettify: require('tap-difflet'), // default 'standard TAP' output
      separator: true
    },
    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,
    concurrency: Infinity,

    // list of files / patterns to load in the browser
    files: [
      './scripts/testLoad.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './scripts/testLoad.js': ['babel', 'webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  })
}
