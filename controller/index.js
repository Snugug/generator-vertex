'use strict';
var util = require('util'),
    ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.askForControllerName = function askForControllerName() {
  this.askForName('controller')
}

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.generateSourceAndTest(
    'controller'
  );
};
