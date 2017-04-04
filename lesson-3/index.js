'use strict'

//1.1
function map(input, handler) {
  if (!Array.isArray(input)) {
    throw new Error('First argument must be array')
  }
  
  if(typeof handler !== 'function'){
    throw new Error('Second argument must be a function');
  }
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    newArr.push(handler(input[i], i))
  }
  return newArr;
}

//1.2
function reduce(input, handler) {
  if (!Array.isArray(input)) {
    throw new Error('First argument must be array')
  }
   
  if(typeof handler !== 'function'){
    throw new Error('Second argument must be a function');
  }
  let prev = input[0];
  for (let i = 1; i < input.length; i++) {
    prev = handler(prev, input[i])
  }
  return prev;
}

//1.3
function every(input, handler) {
  if (!Array.isArray(input)) {
    throw new Error('First argument must be array')
  }
   
  if(typeof handler !== 'function'){
    throw new Error('Second argument must be a function');
  }
  for (let i = 0; i < input.length; i++) {
    if (!handler(input[i])) {
      return false;
    }
  }
  return true;
}

//1.4
function filter(input, handler) {
  if (!Array.isArray(input)) {
    throw new Error('First argument must be array')
  }
   
  if(typeof handler !== 'function'){
    throw new Error('Second argument must be a function');
  }
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    if (handler(input[i])) {
      newArr.push(input[i])
    }
  }
  return newArr;
}

let input = [1, 2, 3, 4, 5];
// console.log(map('input', (item, index) => item * 3))

// console.log(reduce(input, (prev, curr)=>prev+curr))

// console.log(every(input, (item)=>item%2===0))

// console.log(filter(input, (item)=>item%2===0))


/* 2. Реализовать следующую задачу и оценить ее сложность так, как мы это делали на занятии (подробно, не просто Big O):
Если мы перечислим все натуральные числа меньше 10ти, которые кратны 3 или 5, мы получим: 3, 5, 6, 9. Их сумма равна 23. Найти сумму всех натуральных чисел, которые кратны 3 или 5 и меньше 1000.*/
function getSum(max) {
  let sum = 0;//t1
  for (let i = 0; i < max; i++) {//t2,t3*n,t3*n-1
    if (i % 3 === 0 || i % 5 === 0) { // 
      sum += i;
    }
  }
}
// getSum(10);

/*3. Реализовать сортировку слиянием (merge sort). */
function mergeSort(arr) {
  let arrLength = arr.length;
  let arrHalfLength = Math.ceil(arrLength / 2);
  if (arrLength === 1) {
    return arr;
  }

  let a = [];
  let b = [];
  for (let i = 0; i < arrLength; i++) {
    if (i < arrHalfLength) {
      a.push(arr[i]);
    } else {
      b.push(arr[i])
    }
  }
  if (a.length > 1 || b.length > 1) {
    return con(mergeSort(a), mergeSort(b));
  } else {
    return con(a, b)
  }
}

function con(a, b) {
  let result = [];
  let isCon = true;
  let i = 0;
  let y = 0;
  while (isCon) {
    if (i >= a.length && y >= b.length) {
      return result;
    }
    if (i >= a.length) {
      result.push(b[y]);
      y++;
      continue;
    }
    if (y >= b.length) {
      result.push(a[i]);
      i++;
      continue;
    }

    if (a[i] === b[y]) {
      result.push(a[i]);
      result.push(b[y]);
      i++;
      y++;
      continue;
    }
    if (a[i] < b[y]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[y]);
      y++;
    }
  }
  return result;
}

// let arr = [9, 5, 1, 4, 2, 1, 7, 8, 6, 4, 5, 1, 3, 2, 4, 6, 4, 8];
// console.log(mergeSort(arr));