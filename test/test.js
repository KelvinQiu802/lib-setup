const expect = require('expect.js');
const { deepClone } = require('../src/index.js');

describe('function clone', () => {
  describe('params', () => {
    it('正确测试', () => {
      expect(deepClone('abc')).to.equal('abc');

      const arr = [1, 2, [3, 4]];
      const cloneArr = deepClone(arr);
      expect(cloneArr).not.to.equal(arr);
      expect(cloneArr).to.eql(arr);

      const obj = { a: { b: 1, c: { d: 2 } } };
      const cloneObj = deepClone(obj);
      expect(cloneObj).not.to.equal(obj);
      expect(cloneObj).to.eql(obj);
    });

    it('边界测试', () => {
      expect(deepClone()).to.equal(undefined);

      expect(deepClone(undefined)).to.equal(undefined);
    });
  });
});
