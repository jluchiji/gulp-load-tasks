(function() {
  module.exports = function(config) {
    var gulp, name, plugins, register, requireDir, tasks, _;
    _ = require('underscore');
    gulp = require('gulp');
    requireDir = require('require-dir');
    console.log(arguments);
    config = _.defaults(config, {
      taskDir: 'gulp'
    });
    plugins = {
      cache: {},
      get: function(name) {
        var _base;
        return (_base = this.cache)[name] != null ? _base[name] : _base[name] = require(name);
      }
    };
    tasks = requireDir(config.taskDir);
    for (name in tasks) {
      register = tasks[name];
      register(gulp, plugins.get, config);
    }
    return gulp;
  };

}).call(this);
