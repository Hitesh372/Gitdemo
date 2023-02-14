const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      screenshotOnRunFailure=true;
	    require('cypress-mochawesome-reporter/plugin') (on);
      return config;
    },
    specPattern: 'cypress/e2e/*.feature',
    viewportWidth: 1880,
    viewportHeight: 882,
  },
});