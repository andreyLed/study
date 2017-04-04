function getArmNumber(n) {
  if (!Number.isInteger(n)) {
    throw new Error('First args must be integer');
  }
  
  if(n < 2){
    throw new Error('First args must be >= 2');
  }
  
  let arr = [1];
  for (let i = 1; i < n; i++) {
    arr[i] = 0;
  }

  let start = Math.pow(10, n - 1);
  let stop = start * 10 - 1;
  let iterations = stop - start;
  let i = 0;
  const result = [];
  
  while (i < iterations) {
    arr[n - 1] += 1;

    for (let y = n - 1; y >= 0; y--) {
      if (arr[y] > 9) {
        arr[y] = 0;
        arr[y - 1] += 1;
      }
    }
    
    let sum = arr.reduce((prev, cur) => prev + Math.pow(cur, n), 0)
    
    if (+arr.join('') === sum) {
      result.push(sum);
    }
    
    i += 1;
  }
  return result;
}

// console.log(getArmNumber(3))

/*
2.1 parseInt(typeof (123 + 'test'), 29)  
typeof (123 + 'test')  = 'string'
parseInt('string', 29) = ?????????????????????????????????????????

2.2 Number([] + null / 25) Ответ = 0
null / 25 = 0
[] + 0 = '0' сработал toString на массиве и вернул пустую строку
Number('0') = 0

2.3 {} + '25'  Ответ = 'object Object25' 
сработал valueOf на массиве и вернул 'object Object'

2.4 parseInt(('' + Boolean(('abc' / 4).toString()[0]))[3], 15)
('abc' / 4) = NaN
NaN.toString()[0] = 'N'
Boolean(N) = true
'' + true = 'true'
'true'[3] = 'e'
parseInt('e', 15) ??????


2.5 Number('\r\n 123.5') * '4'  Ответ =  494 
метод Number убирает все экранируемые симолы и пробелы внутри строки, затем преобразовывает. 
поскольку это * строка после приводится к Number

2.6 !('false' || 'undefined') + 1 Ответ = 1 
внтури скобок строки, не пустые. берется первая, потому. что она не пустая, а значит true. затем отрицание, которое перед скобками, получаем false. затем сложение, булевое значение приводится к числу.

2.7 '25' > 24 > '26' > '        -1     ' Ответ = true
'25' > 24                 true
true > '26'               false
false > '        -1     ' true

2.8 ({ valueOf () { return 5 } }) == ([1, 2, 3][2] + +'2') Ответ =  true
({ valueOf () { return 5 } }) 5 
([1, 2, 3][2] + +'2') 5 


2.9 typeof void function () { return 7 } (); Ответ =  'undefined' 
если есть void все что после, будет возвращать undefined

2.9.1 Object.is(1 / 0 / Infinity, (1, 'test', true, NaN))
это не понял
*/ 

