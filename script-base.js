'use strict';

// Yeoman Defaults
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator');

// Custom Dependencies
var shared = require('./shared.js'),
    chalk = require('chalk'),
    fs = require('fs-extra'),
    validator = require('validator'),
    pluralize = require('pluralize'),
    _ = require('lodash'),
    _s = require('underscore.string');

var Generator = module.exports = function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.log(shared.welcome() + '\n');
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.askForName = function askForName(type) {
  var done = this.async();

  var prompts = [
    {
      type: 'string',
      name: 'scriptName',
      message: 'Name your ' + type + '.' + chalk.red(' (Required)'),
      validate: function (input) {
        if (input === '') {
          return 'Please enter your project\'s name';
        }
        return true;
      }
    }
  ];

  this.prompt(prompts, function (props) {
    this.scriptName = props.scriptName;
    this.scriptSlug = _s.slugify(this.scriptName);

    done();
  }.bind(this));
}

Generator.prototype.generateSourceAndTest = function (type) {
  var pid = this.config.get('pid'),
      abbr = shared.abbr(type),
      funcName = _s.classify(this.scriptName),
      moduleName = pid + '--' + abbr.toUpperCase() + '__' + funcName,
      destPath,
      _this = this,
      funcBody,
      typeName;

  //////////////////////////////
  // Generate typed name
  //   Different types in Angular require slightly different names
  //////////////////////////////
  if (type === 'directive') {
    typeName = _s.camelize(this.scriptSlug);
  }
  else {
    if (type === 'controller') {
      funcName = funcName +_s.classify(abbr);
    }
    else {
      funcName = funcName +_s.classify(type);
    }
    typeName = funcName;
  }

  destPath = 'js/' + pluralize(type) + '/' + typeName + '.js',

  //////////////////////////////
  // Main Script Generation
  //////////////////////////////
  // Grab the main function's template
  funcBody = fs.readFileSync(this.sourceRoot() + '/_' + type + '.js', 'utf8');

  // Template out the main function and add it to scope
  this.funcBody = _.template(funcBody, {
    'funcName': funcName,
    'name': this.scriptName,
    'type': type
  });

  // Additional scope
  this.moduleName = moduleName;
  this.typeName = typeName;
  this.funcName = funcName;
  this.type = type;

  // Template out the script
  this.template('../../templates/_script--base.js', destPath);
};
