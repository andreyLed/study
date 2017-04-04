const chai = require('chai');
const lesson5 = require('./lesson-5');

describe('lesson 5 func testing', function () {
  context('getMax', function () {
    it('first args is string, must be throw error', function () {
      let fn = lesson5.getMax;
      chai.expect(fn.bind(fn, '')).to.throw(Error);
    })
    
    it('first args is empty array', function () {
      let fn = lesson5.getMax;
      chai.expect(fn.bind(fn, [])).to.throw(Error);
    })
    
    it('first args is array with 3 items', function () {
      let fn = lesson5.getMax;
      chai.expect(fn.bind(fn, [1, 2, 3])).not.to.throw(Error);
    })
    
    it('first args is array with 3 items, one of items is string', function () {
      let fn = lesson5.getMax;
      chai.expect(fn.bind(fn, [1, 'fgf', 3])).to.throw(Error);
    })
    
  })
  
    context('getDoubleValue', function () {
    it('first args is string, must be throw error', function () {
      let fn = lesson5.getDoubleValue;
      chai.expect(fn.bind(fn, '', [])).to.throw(Error);
    })
    
       it('second args is string, must be throw error', function () {
      let fn = lesson5.getDoubleValue;
      chai.expect(fn.bind(fn, [], '')).to.throw(Error);
    })
  })
})


