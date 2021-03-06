//Задано число n. Сложить четные числа до 2*n (без рекурсии)
let n = 10;
let sum = 0;
for (let i = 0, max = 2 * n; i < max; i++) {
  sum += i % 2 === 0 ? i : 0;
}

//Напишите рекурсивную функцию, которая принимает на вход положительное число N и возвращает сумму чисел от 1 до N
function getSum(n) {
  if (n <= 1) {
    return 1;
  }
  return n + getSum(n -= 1);
}

//Напишите функцию, возвращающую n-ное число Фибоначчи (рекурсивно). Можно реализовать сначала с помощью циклов, потом переписать на рекурсию, если это упростит задачу

//Найти 2 наибольших числа в массиве за один проход (без рекурсии)
function getDoubleMax(arr) {
  let max1 = arr[0];
  let max2 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    }
  }
  return [max1, max2];
}

//Написать функцию для умножения 2х матриц (без рекурсии)

//Написать функцию, которая рекурсивно вычисляет значение выражения:
//Sn = (Sn-1 * n) / (Sn-2 + n); 
//S0 = 0, S1 = 1 - условия выхода из рекурсии
// function calcVurazh(){
//   if()
// }

//Написать функцию, которая принимает на вход 3 аргумента: первый - индекс в массиве, второй - элемент, который нужно добавить в место под индексом в массиве, третий - сам массив. Функция должна добавить элемент в определенную позицию в массиве, сместив все остальные элементы. (без рекурсии)
//Пример: дан массив [1, 2, 3], необходимо добавить число 2.5 в позицию 2. В результате должно получиться: [1, 2, 2.5, 3]
function insertElem(index, elem, arr) {
  //Вообще надо использовать arr.splice(index, 0, elem);
  //Но если сами делаем
  for (let i = arr.length; i >= index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = elem
  return arr;
}

//Дан массив n * n, состоящий из любых чисел (не обязательно повторяющихся или одинаковых). Написать функцию, которая посчитает сумму всех его элементов. Пример: для массива ниже сумма будет 75
function getArrSum(arr) {
  return arr.reduce((sum, curr) => {
    return sum + (Array.isArray(curr) ? getArrSum(curr) : curr)
  }, 0)
}

//Дан массив строк. Написать функцию, которая возвращает новый массив, содержащий только уникальные элементы исходного массива (без рекурсии)
function getUniqStrings(arr) {
  let result = {};
  arr.forEach(item => {
    let temp = item.split(' ');
    temp.forEach(word => result[word] = word)
  })
  return Object.keys(result);
}

//Даны два целых числа A и В. Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае. Использовать рекурсию
function showNumber(a, b) {
  if (a > b) {
    return;
  }
  console.log(a);
  showNumber(++a, b);
}

//Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (Это аналог задачи из прошлого дз). При решении этой задачи нельзя использовать строки, массивы, циклы.
function getNaturSum(n) {
  if (n <= 0) {
    return 0;
  }
  return n % 10 + getNaturSum(Math.floor(n / 10))
}

//Дано слово, состоящее только из строчных букв. Проверьте, является ли это слово палиндромом. Использовать рекурсию
function isPalindrom(str) {

}

//Дан массив, содержащий последовательность натуральных чисел. Используя рекурсивную функцию вывести все нечетные элементы этого массива, сохраняя их порядок.
//Пример: исходный массив: [2, 4, 5, 6, 11, 22]. Вывод: 5 11.
function getAllNatural(index, arr) {
  if (index >= arr.length) {
    return;
  }
  if (arr[index] % 2) {
    console.log(arr[index])
  }
  getAllNatural(index += 1, arr);
}

//Дан массив, содержащий последовательность натуральных чисел. Написать рекурсивную функцию, которая возвращает максимальное число в массиве.
//Напишите функцию, которая используя рекурсию проверяет, является ли число N простым. (Необходимо проверить, делится ли число N на любое из чисел меньше N)
function getMax(inex, arr) {

}

//Напишите рекурсивную функцию “flatten”, которая "выравнивает" массив. Например: flatten([1,[2],[3,[[4]]]]); -> [1,2,3,4]
function flatten(index, arr) {
  if (index < 0) {
    return [];
  }
  let current = Array.isArray(arr[index]) ? flatten(arr[index].length - 1, arr[index]) : arr[index];
  let newarr = flatten(index -= 1, arr);
  // newarr.concat(current);
  return newarr.push(current);

}
// console.log(flatten(2, [1, [2, [3], 4], [5, 6, [[7, 8], 9]]]));
