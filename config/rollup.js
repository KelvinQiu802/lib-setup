// 为文件添加Banner

const pkg = require('../package.json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const common = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');

const banner = `/*!
* ${pkg.name} ${pkg.version}
* Licensed under MIT
*/
`;

function getPlugins() {
  return [
    nodeResolve(),
    common(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ];
}

module.exports = { banner, getPlugins };
