function isNumber(number) {
  return typeof number === 'number' && !isNaN(number) 
}

//Напишите программу, которая определяет, является ли число четным
function isEven(number) {
  if (isNumber(number)) {
    return number % 2 === 0;
  }
  throw new Error('enter correct number')
}

//Вывести количество секунд в сутках
let secondsInDay = 24 * 60 * 60;

//Велосипедист проезжает S км  за T часов. С какой средней скоростью он едет?
function getAveSpeed(distanse, time) {
  if (isNumber(distanse) && isNumber(time)) {
    return distanse / time;
  }
  throw new Error('enter correct distanse and time')
}

//Написать программу для вычисления выражения ax2 + bx + c
function calulate(a, b, c, x) {
  return a * x * x + b * x + c;
}

//Присвойте переменной X ее же значение, увеличенное на N раз
let x = 5;
let n = 10;
x *= n;

//Написать программу, которая меняет местами значения 2х переменных, используя третью переменную
function change(a, b) {
  let c;
  c = a;
  a = b;
  b = c;
}

//То же самое, но используя только эти две переменные
function change(a, b) {
  console.log(`a = ${a}, b = ${b}`);
  if(a > b){
    b = a - b;
    a = a - b;
    b = b + a;
  } else {
    a = b - a;
    b = b - a;
    a = a + b;
  }
  console.log(`a = ${a}, b = ${b}`);
}

//Мальчик плюнул прямо вверх со скоростью 10м/c, через сколько времени он пожалеет об этом? g = 10 м/с
v/g*2

// Дано целое число. Определить значение его самой младшей цифры. (Оператор %)
x = 123;
console.log(123 % 10);

// Переменные A, B, C содержат числовые значения. 
// Проверить, могут ли их значения быть сторонами треугольника
// Вычислить площадь треугольника, если значения могут быть сторонами треугольника
function checkTriangl() {

}

// Переменная X содержит трехзначное число. 
// Проверить, является ли число целым (использовать встроенные в js функции)
// Поместите в переменную SUM сумму цифр этого числа
x = 123.5;
if (x - Math.floor(x) > 0) {
  console.log('not int');
}
let SUM = 0;
while (x > 0) {
  SUM += x % 10;
  x = Math.floor(x / 10);
}
console.log(SUM);

// Вычислите расстояние между двумя точками имеющими координаты X1, Y1 и X2, Y2 
function dist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
// console.log(dist(-2.3, 4, 8.5, 0.7))

// Покажите на экране таблицу умножения одноразрядных двоичных чисел (это числа 0 и 1)
function dfdf() {
  const ints = [0, 1];

}

// [*] Дано число. Получить его дробную часть. (Решение должно работать корректно и для положительных и для отрицательных чисел) Пример: для числа 1.12345 программа должна вернуть 12345, для -5.678 результатом будет 678;
// Указать несколько вариантов решения: минусы и плюсы каждого подхода.
// Можно использовать строки
function getFractional(number) {
  let temp = `${number}`.split('.');

  return temp.length > 1 ? +temp[1] : 0;
}
function getFractional2(number) {///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ошибка точности
  let x = number % 1;
  if (x === 0) {
    return 0;
  }
  while (x % 1 > 0) {
    x *= 10;
  }

  return x;
}

// Напечатать большее из трех чисел: x, y, и z
console.log([x, y, z].sort()[2])

// Выведите первые 9 степеней числа 2
for (let i = 2; i < 11; i++) {
  console.log(Math.pow(2, i));
}

// Написать программу, которая выводит все четные числа в диапазоне [0, 100]
// С помощью цикла for
// C помощью цикла while
for (let i = 2; i < 100; i += 1) {
  if (!(i % 2)) {
    console.log(i);
  }
}
let i = 2; ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! лишнее 99
while (i < 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i += 1;
}

// Напишите программу, которая выводит сумму чисел от 1 до 10000
function geSum() {
  let sum = 0;
  for (let i = 1; i < 10000; i += 1) {
    console.log(sum += i);
  }
}

// Напишите программу, которая выводит все простые числа из интервала от 2 до 1000.
// Простое число - натуральное число, большее 1, которое ни на что не делится, кроме себя и 1.
// Результат должен быть: 2,3,5,7 и т. д.
// Строки
function getSimple() {
  const temp = [];
  temp.push(2);
  for (let i = 3; i < 1000; i += 1) {
    if (i % 2) {
      temp.push(i)
    }
  }
  return temp.join(', ');
}

// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice)
const str = 'я учу javascript!';

// Написать программу, которая преобразует первый символ строки в заглавный регистр, а все остальные в строчный
function strUpdate(str){
  return str[0].toUpperCase() + str.substr(1).toLowerCase();
}

// Написать программу, которая определяет, содержит ли строка слово spam. (слово может быть записано в разных регистрах: spam, SPAM, etc.)
function checStr(str){
  return str.toLowerCase().include('spam');
}

// Написать программу, которая выводит посимвольно строку в следующем формате: “индекс символа” - “сомвол”.
// Пример: для строки “abc” результат будет таким
// 0 - a
// 1 - b
// 2 - c
function strIndex(str){
  for(let i = 0; i < str.length; i+=1){
    console.log(`${i} - ${str[i]}`)
  }
}

// Дана строка и переменная с максимально допустимой длиной строки. Написать программу, которая, если строка превышает максимально допустимую длину, обрезает строку и заменяет конец на “...” так, чтобы длина строки стала равна максимально допустимому значению
function cutStr(str, maxLength){
  if(str.length > maxLength){
    return str.substr(0, maxLength - 3) + '...';
  }
  return str;
}

// [*] Подсчитать количество слов во введенной строке, найти длину максимального слова, минимального слова и среднюю длину слов. Предусмотреть возможность присутствия в тексте нескольких пробелов и знаков препинания.
// Можно использовать регулярные выражения
function countStr(str){
  let temp = str.split(' '); // нужна правильная регулярка
  let wordsAmount = temp.length;
  let big = 0;
  let small = Infinity;
  let ave = 0;
  for(let i = 0; i < wordsAmount; i+=1){
    ave += temp[i].length;
    if(temp[i].length > big){
      big = temp[i].length;
      continue;
    }  
    if(temp[i].length < small){
      small = temp[i].length;
    }
  }
  return {big: big, small: small, ave: ave / wordsAmount}
}

// Преобразуйте первую букву каждого слова строки в верхний регистр
function toUp(str) {
  let temp = str.split(' ');
  temp = temp.map(item => item = item[0].toUpperCase() + item.substr(1))
  return temp.join(' ');
}

// Вывести различные символы двух строк (т.е. такие, какие есть только в одном из них)
function strDiff(str1, str2){
  
}
// Написать программу, которая разворачивает порядок слов в строке. Пример: “Hello, world!” станет “world! Hello,”
function strRevers(str){
  return str.split(' ').revers().join(' ');
}
// [*] Написать программу, которая возвращает строку заданной длины, содержащую попеременно чередующиеся нули и единицы
// Примеры: для длины 1 должна вернуться строка “1”, для 3 - “101”, для 2 - “10”
// Можно использовать массивы
function getBinStr(length){
  return length === 1 ? '1' : new Array(length).join('10').substr(0, length);
}
// Напишите программу, которая выводит на экран следующую фигуру (использовать вложенные циклы)
// ********
// **      **
// **      **
// ********
function drow(){
  
}
