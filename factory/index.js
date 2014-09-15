'use strict';
var util = require('util'),
    ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.askForFactoryName = function askForFactoryName() {
  this.askForName('factory')
}

Generator.prototype.createFactoryFiles = function createFactoryFiles() {
  this.generateSourceAndTest(
    'factory'
  );
};
