'use strict';

// Yeoman Defaults
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator');

// Custom Dependencies
var shared = require('../shared.js'),
    chalk = require('chalk'),
    validator = require('validator'),
    _s = require('underscore.string');

// Generator Variables
var settings = {};

var VertexGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(shared.welcome() + '\n');

    this.log('  An opinionated Angular generator.\n' +
      '  Works well with North. ' + chalk.cyan('http://pointnorth.io\n'));

    var prompts = [
      {
        type: 'string',
        name: 'projectName',
        message: 'What\'s your project\'s name?' + chalk.red(' (Required)'),
        validate: function (input) {
          if (input === '') {
            return 'Please enter your project\'s name';
          }
          return true;
        }
      },
      {
        type: 'string',
        name: 'projectId',
        message: 'Provide a 3 letter abbreviation for your project.' + chalk.red(' (Required)'),
        validate: function (input) {
          if (input === '') {
            return 'Please enter a 3 letter abbreviation';
          }
          else if (input.length !== 3) {
            return 'Abbreviation must be 3 letters long';
          }
          else if (!validator.isAlpha(input)) {
            return 'Abbreviation must only contain letters';
          }

          return true;
        }
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.slug = _s.slugify(this.projectName);
      this.pid = props.projectId.toUpperCase();

      done();
    }.bind(this));
  },

  enforceFolderName: function () {
    if (!this.options['init']) {
      this.destinationRoot(this.slug);
    }
  },

  saveSettings: function () {
    settings = {
      project: this.projectName,
      slug: this.slug,
      pid: this.pid,
      runner: 'Gulp'
    };

    this.config.set(settings);
  },

  // writing: {
  //   // app: function () {
  //   //   this.dest.mkdir('app');
  //   //   this.dest.mkdir('app/templates');

  //   //   this.src.copy('_package.json', 'package.json');
  //   //   this.src.copy('_bower.json', 'bower.json');
  //   // },

  //   // projectfiles: function () {
  //   //   this.src.copy('editorconfig', '.editorconfig');
  //   //   this.src.copy('jshintrc', '.jshintrc');
  //   // }
  // },

  // end: function () {
    // this.installDependencies();
  // }

  invokes: function () {
    // Compose with the North JSHint subgenerator to get the hint task
    this.composeWith('north:jshint', {
      options: {
        runner: 'Gulp'
      }
    });
  }
});

module.exports = VertexGenerator;
