"use strict";
// [함수]
function sum(x, y) {
    return x + y;
    // return null;  [error]
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('i am just saying hollo world');
}
