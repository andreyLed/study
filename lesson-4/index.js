'use strict'


function arrayToList(arr) {
  if(arr.length === 0){
    throw new Error(`Array can't be empty`)
  }
  
  let list = {
    value: arr[0],
    next: null
  };

  let currentNode = list;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = {
      value: arr[i],
      next: null
    };

    currentNode = currentNode.next;
  }
  return list;
}


function listToArray(list) {
  let arr = [];

  arr.push(list.value);
  if (list.next !== null) {
    arr = arr.concat(listToArray(list.next))
  }
  return arr;
}

function getIndex(list, value) {
  if (list.value === value) {
    return 0;
  } else if (list.next == null) {
    return -1;
  }
  let index = getIndex(list.next, value);
  return index < 0 ? index : index + 1;
}

function removeElement(list, value) { // не могу понять, почему он не изменяет исходны список
  if(list === null){
    return 0;
  }
  if (list.value === value) {
    list = list.next;
    return removeElement(list, value) + 1
  } else{
    return removeElement(list.next, value)
  }
}

function removeByIndex(list, index) {// не могу понять, почему он не изменяет исходны список
  if(list === null){
    return -1;
  }
  if (index === 0) {
    const val = list.value;
    list = list.next;
    return val;
  } else{
    return removeByIndex(list.next, index - 1)
  }
}

function addValue(list, value, index) {
  if(list === null){
    return -1;
  }
  if (index === 1) {
    const newNode = {
      value: value,
      next: list.next
    }
    list.next = newNode;
    return newNode;
  } else{
    return addValue(list.next, value, index - 1)
  }
}

function print(list) {
  return list.next === null ? `${list.value}` : `${list.value}, ${print(list.next)}`;
}

let arr = [10, 11, 9, 7];

let list = {
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
// console.log(JSON.stringify(arrayToList(arr), null, '  '))

// console.log(listToArray(list));

// console.log(getIndex(list, 12))

// console.log(removeElement(list, 111))
// console.log(JSON.stringify(list, null, '  '));

// console.log(removeByIndex(list, 3))
// console.log(JSON.stringify(list, null, '  '));

// console.log(addValue(list, 55, 2));
// console.log(JSON.stringify(list, null, '  '));

module.exports ={arrayToList, listToArray, getIndex, removeElement, removeByIndex, addValue, print}