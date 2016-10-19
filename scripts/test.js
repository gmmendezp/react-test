var paths = require('../config/paths')
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

// Load environment variables from .env file. Surpress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true})

var configFile = {
  configFile: paths.karmaConfig
}

if (process.argv.indexOf('ci') > -1) {
  configFile.singleRun = true
  configFile.browsers = ['PhantomJS']
}

var Server = require('karma').Server
var server = new Server(configFile, function (exitCode) {
  process.exit(exitCode)
})

server.start()
