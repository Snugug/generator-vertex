var chalk = require('chalk');

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


module.exports.welcome = welcome;
