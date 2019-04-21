const path = require('path');

module.exports = ({ platform }, defaults) => ({
  entry: `./storybook/index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    modules: [path.join(__dirname, 'node_modules')]
  }
});
