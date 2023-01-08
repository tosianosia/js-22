/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементно перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) {
  console.log('number', number);
});

console.log(numbers);
