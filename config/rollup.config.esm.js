// Configuration for ES Module

const { banner, getPlugins } = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    banner: banner,
  },
  plugins: [...getPlugins()],
};
