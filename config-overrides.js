const {
  override,
  disableEsLint,
  addDecoratorsLegacy,
  addBabelPlugins,
  addBabelPresets,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra');

module.exports = override(disableEsLint(), ...addBabelPlugins('babel-plugin-styled-components'));
