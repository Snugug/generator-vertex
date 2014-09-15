'use strict';
var util = require('util'),
    ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.askForDirectiveName = function askForDirectiveName() {
  this.askForName('directive')
}

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
  this.generateSourceAndTest(
    'directive'
  );
};
