(function() {
  module.exports = function(gulp, config) {
    var name, plugins, register, requireDir, tasks, _, _results;
    _ = require('underscore');
    requireDir = require('require-dir');
    _.defaults(config, {
      taskDir: 'gulp'
    });
    plugins = {
      cache: {},
      get: function(name) {
        var _base;
        return (_base = this.cache)[name] != null ? _base[name] : _base[name] = require(name);
      }
    };
    tasks = load(config.taskDir);
    _results = [];
    for (name in tasks) {
      register = tasks[name];
      _results.push(register(gulp, plugins.get, config));
    }
    return _results;
  };

}).call(this);
