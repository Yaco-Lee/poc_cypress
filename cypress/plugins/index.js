/// <reference types="cypress" />

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = (on) => {
  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
  });

  on('after:run', async () => {
    console.log('override after:run');
    await afterRunHook();
  });
};

module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  require('../../src/plugin')(config)
};
