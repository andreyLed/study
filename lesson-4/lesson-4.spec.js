const chai = require('chai');
const func = require('./lesson-4');



describe('lesson 4 func testing', function () {
  context('arrayToList', function () {
    it(`Array can't be empty, must be throw error`, function () {
      let arr = getArr();
      let fn = func.arrayToList;
      chai.expect(fn.bind(fn, [])).to.throw(Error);
    })

    // it('first args is empty array', function () {
    //   let fn = lesson5.getMax;
    //   chai.expect(fn.bind(fn, [])).to.throw(Error);
    // })

    // it('first args is array with 3 items', function () {
    //   let fn = lesson5.getMax;
    //   chai.expect(fn.bind(fn, [1, 2, 3])).not.to.throw(Error);
    // })

    // it('first args is array with 3 items, one of items is string', function () {
    //   let fn = lesson5.getMax;
    //   chai.expect(fn.bind(fn, [1, 'fgf', 3])).to.throw(Error);
    // })

  })

  // context('getDoubleValue', function () {
  //   it('first args is string, must be throw error', function () {
  //     let fn = lesson5.getDoubleValue;
  //     chai.expect(fn.bind(fn, '', [])).to.throw(Error);
  //   })

  //   it('second args is string, must be throw error', function () {
  //     let fn = lesson5.getDoubleValue;
  //     chai.expect(fn.bind(fn, [], '')).to.throw(Error);
  //   })
  // })
})


function getArr() {
  return [10, 11, 9, 7];
}
function getList() {
  return {
    value: 10,
    next: {
      value: 9,
      next: {
        value: 9,
        next: {
          value: 7,
          next: null
        }
      }
    }
  }
}