// Configuration for Common JS

const { banner, getPlugins } = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner: banner,
  },
  plugins: [...getPlugins()],
};
