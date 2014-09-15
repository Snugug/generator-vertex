'use strict'

var chalk = require('chalk');

//////////////////////////////
// Welcome Message
//////////////////////////////
var welcome = function () {
  var welcome = '' +
    chalk.red('           __') + '\n' +
    chalk.red('  __      / /         ') + chalk.gray('  _ ') + '\n' +
    chalk.red('  \\ \\    / /') + chalk.gray(' ___  _ __ | |_   ___ __  __') + '\n' +
    chalk.red('   \\ \\  / /') + chalk.gray(' / _ \\| \'__|| __| / _ \\\\ \\/ /') + '\n' +
    chalk.red('    \\ \\/_/') + chalk.gray(' |  __/| |   | |_ |  __/ >  < ') + '\n' +
    chalk.red('     \\_\\') + chalk.gray('    \\___||_|    \\__| \\___|/_/\\_\\');

  return welcome;
}

var abbr = function (identifier) {
  var abbrHash = {
    'controller': 'ctrl',
    'directive': 'dir',
    'factory': 'fctry',
    'filter': 'fltr',
    'service': 'svc'
  }

  if (abbrHash[identifier]) {
    return abbrHash[identifier];
  }
  else {
    return false;
  }
}

//////////////////////////////
// Exports
//////////////////////////////
module.exports.welcome = welcome;
module.exports.abbr = abbr;
