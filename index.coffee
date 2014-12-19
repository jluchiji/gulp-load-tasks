# --------------------------------------------------------------------------- #
#                                                                             #
# gulp-load-tasks - manage large gulp build scripts                           #
#                                                                             #
# --------------------------------------------------------------------------- #
module.exports = (config) ->

  _           = require 'underscore'
  gulp        = require 'gulp'
  requireDir  = require 'require-dir'

  # Configuration defaults
  _.defaults config,
    taskDir: 'gulp'

  # Plugin Cache / Loader
  plugins =
    cache: { }
    get: (name) -> @cache[name] ?= require name

  # Get all stuff
  tasks = load config.taskDir

  # Register tasks with gulp
  register(gulp, plugins.get, config) for name, register of tasks

  # Return gulp object
  return gulp
