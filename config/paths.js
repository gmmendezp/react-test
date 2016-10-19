var path = require('path')
var fs = require('fs')
var glob = require('glob')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd())
function resolveApp (relativePath) {
  return path.resolve(appDirectory, relativePath)
}

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.

// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export `nodePaths` as an array of absolute paths.
// It will then be used by Webpack configs.

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(resolveApp)

var createFilesObject = function (obj, value, index) {
  obj[index] = value
  return obj
}

var testFiles = glob.sync('./src/**/*.test.js').map(function (file) {
  return path.resolve(file)
})

Array.prototype.push.apply(testFiles, glob.sync('./src/**/*.spec.js').map(function (file) {
  return path.resolve(file)
}))

Array.prototype.push.apply(testFiles, glob.sync('./tests/*.js').map(function (file) {
  return path.resolve(file)
}))

testFiles = testFiles.reduce(createFilesObject, {})

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  testFiles,
  appSrc: resolveApp('src'),
  karmaConfig: resolveApp('config/karma.conf.js'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths
}
