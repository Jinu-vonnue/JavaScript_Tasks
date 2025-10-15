/*

Without using built-in methods like .map(), .filter(), or .reduce(), implement your own versions:

myMap(array, callback)
myFilter(array, callback)
myReduce(array, callback, initialValue)

*/

//ARRAY MAP METHOD

let fruits = ["Apple", "Mango", "Orange"];

function callback(i) {
  return i.length;
}

function myMap(arr, callback) {
  for (let item in arr) {
    result = callback(arr[item]);
    arr[item] = result;
  }
  return arr;
}

console.log(myMap(fruits, callback));

//ARRAY FILTER METHOD

let num = [20, 22, 32, 36, 25, 26, 35];

function callbackFilter(i) {
  return i > 30;
}

function myFilter(arr, callback) {
  let filtered = [];
  arr.forEach((itm) => {
    if (callback(itm)) filtered.push(itm);
  });
  return filtered;
}

console.log(myFilter(num, callbackFilter));

//ARRAY REDUCE METHOD

let array = [1, 2, 3, 4, 5];
let initialValue = 0;

function callbackReduce(res, i) {
  return res + i;
}

function myReduce(arr, callback, initialValue) {
  let res = initialValue;
  arr.forEach((itm) => (res = callback(res, itm)));
  return res;
}

console.log(myReduce(array, callbackReduce, initialValue));
