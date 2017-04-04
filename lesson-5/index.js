
function getMax(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('First args must be is array');
  }
  if (arr.length < 3) {
    throw new Error('Array must includes 3 or more elements');
  }

  let maxValues = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      throw new Error('Array item value must be integer');
    }
    if (arr[i] >= maxValues[0]) {
      maxValues[0] = arr[i];
    }
    if (arr[i] >= maxValues[1]) {
      maxValues[0] = maxValues[1];
      maxValues[1] = arr[i];
    }
    if (arr[i] >= maxValues[2]) {
      maxValues[1] = maxValues[2];
      maxValues[2] = arr[i];
    }
  }
  return maxValues;
}

// console.log(getMax([99, 11, 42, -17, 27, 78, -16]));

function getDoubleValue(arr1, arr2) {
  if (!Array.isArray(arr1)) {
    throw new Error('First args must be is array');
  }
  if (!Array.isArray(arr2)) {
    throw new Error('Second args must be is array');
  }

  let arr1Obj = {};
  let arr2Obj = {};

  let i = 0;
  let y = 0;
  let result = {};
  while (i < arr1.length || y < arr2.length) {
    arr1Obj[arr1[i]] = 1;
    arr2Obj[arr2[y]] = 1;

    if (arr2Obj[arr1[i]]) {
      result[arr1[i]] = 1;
    }
    if (arr1Obj[arr2[y]]) {
      result[arr2[y]] = 1;
    }
    i++;
    y++;
  }
  return Object.keys(result);
}

// console.log(getDoubleValue([2, 2, 4, 1, 5, 3, 0, 5, 2, 3, 7], [1, 2, 0, 2, 5, 8, 0]))

// EASY
function checkBraces(str) {
  if (typeof str !== 'string') {
    throw new Error('First args must be a string');
  }

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      arr.push(1)
    } else if (str[i] === '}' && arr.length) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length ? false : true
}

// console.log(checkBraces('{{}}{}{}'))
// console.log(checkBraces('{}{{}'))


// HARD
const operatorsWeight = {
  '-': 0,
  '+': 1,
  '/': 2,
  '*': 3,
  '^': 4
}
const operators = ['-', '+', '/', '*', '^'];

function toOPN(str) {
  if (typeof str !== 'string') {
    throw new Error('First args must be a string');
  }

  let result = [];
  let os = [];

  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(+str[i])) {
      result.push(str[i])
    }

    if (str[i] === '(') {
      os.push(str[i]);
    }
    
    if (str[i] === ')') {
      while (os[os.length - 1] !== '(') {
        result.push(os.pop());
      }
      os.pop();
    }

    if (operators.includes(str[i])) {
      while (operatorsWeight[str[i]] <= operatorsWeight[os[os.length - 1]]) {
        result.push(os.pop());
      }
      os.push(str[i]);
    }
  }

  while (os.length) {
    result.push(os.pop());
  }
  return result.join('');
}

// console.log(toOPN('2+3*5/(1+2)'))

function calcOPN(str) {
  if (typeof str !== 'string') {
    throw new Error('First args must be a string');
  }

  let os = [];

  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(+str[i])) {
      os.push(+str[i])
    }
    else {
      let b = os.pop();
      let a = os.pop();

      switch (str[i]) {
        case '*':
          os.push(a * b);
          break;
        case '/':
          os.push(a / b);
          break;
        case '+':
          os.push(a + b);
          break;
        case '-':
          os.push(a - b);
          break;
      }
    }
  }
  return os;
}

// let tt = toOPN('2+3*5/(1+2)'); console.log(tt);
// console.log(calcOPN(tt));

module.exports = {getMax, getDoubleValue}