const packages = require('./packages');
const npm = require('npm');
const chalk = require('chalk');

// npm list -g --depth 0
const installCb = (err, log) => {
  if (err) {
    throw Error(err);
  }
  console.log(log);
};

npm.load(
  {
    loaded: false,
    global: true,
  },
  err => {
    if (err) {
      throw Error(err);
    }
    console.log(
      '\n',
      chalk.red(`Installing global packages: ${packages.join(' & ')}`),
      '\n',
    );
    npm.commands.install(packages, installCb);
  },
);
