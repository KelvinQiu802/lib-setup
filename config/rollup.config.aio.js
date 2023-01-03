// Configuration for UMD Format

const { banner, getPlugins } = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'clone',
    banner: banner,
  },
  plugins: [...getPlugins()],
};
