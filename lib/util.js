'use strict';

var fs = require('fs');
var path = require('path');

var appRoot = require('app-root-path');
var npmlog = require('npmlog');

exports.getConfig = function readConfig (overrides) {
  var config = {
    buildConfig: require.resolve('../etc/build'),
    developConfig: require.resolve('../etc/develop'),
    renderConfig: require.resolve('../etc/render'),
    locations: []
  };
  if (fs.existsSync(appRoot.resolve('package.json'))) {
    Object.assign(config, appRoot.require('package.json').hops);
  }
  if (fs.existsSync(appRoot.resolve('hops.config.js'))) {
    Object.assign(config, appRoot.require('hops.config.js'));
  }
  Object.assign(config, overrides);
  ['buildConfig', 'developConfig', 'renderConfig'].forEach(function (key) {
    if (!path.isAbsolute(config[key])) {
      config[key] = appRoot.resolve(config[key]);
    }
  });
  return config;
};

exports.log = function log () {
  npmlog.log.apply(npmlog, ['info', 'hops'].concat(Array.from(arguments)));
};

exports.logError = function logError (err) {
  npmlog.log('error', 'hops', err.stack.toString());
};