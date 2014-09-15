'use strict';
var util = require('util'),
    ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.askForFilterName = function askForFilterName() {
  this.askForName('filter')
}

Generator.prototype.createFilterFiles = function createFilterFiles() {
  this.generateSourceAndTest(
    'filter'
  );
};
