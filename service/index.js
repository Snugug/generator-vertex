'use strict';
var util = require('util'),
    ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.askForServiceName = function askForServiceName() {
  this.askForName('service')
}

Generator.prototype.createServiceFiles = function createServiceFiles() {
  this.generateSourceAndTest(
    'service'
  );
};
