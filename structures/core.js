//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + "...";
  }
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  var reversed = str.split('').reverse().join('');
  if (str === reversed) {
    return true;
  }
  return false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
