console.log("Задание 8.3");


let zero = (fn) => typeof fn == "undefined" ? 0 : map.get(fn[1]).call(this, 0, fn[0]);
let one = (fn) => typeof fn == "undefined" ? 1 : map.get(fn[1]).call(this, 1, fn[0]);
let two = (fn) => typeof fn == "undefined" ? 2 : map.get(fn[1]).call(this, 2, fn[0]);
let three = (fn) => typeof fn == "undefined" ? 3 : map.get(fn[1]).call(this, 3, fn[0]);
let four = (fn) => typeof fn == "undefined" ? 4 : map.get(fn[1]).call(this, 4, fn[0]);
let five = (fn) => typeof fn == "undefined" ? 5 : map.get(fn[1]).call(this, 5, fn[0]);
let six = (fn) => typeof fn == "undefined" ? 6 : map.get(fn[1]).call(this, 6, fn[0]);
let seven = (fn) => typeof fn == "undefined" ? 7 : map.get(fn[1]).call(this, 7, fn[0]);
let eight = (fn) => typeof fn == "undefined" ? 8 : map.get(fn[1]).call(this, 8, fn[0]);
let nine = (fn) => typeof fn == "undefined" ? 9 : map.get(fn[1]).call(this, 9, fn[0]);

let plus = (fn) => [fn, '+'];
let minus = (fn) => [fn, '-'];
let times = (fn) => [fn, '*'];
let dividedBy = (fn) => [fn, '/'];

const map = new Map([
    ['+', (a,b) => a+b], 
    ['-', (a,b) => a-b], 
    ['*', (a,b) => a*b], 
    ['/', (a,b) => Math.floor(a / b)] 
]);


console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));
console.log(three(times(three(times(three())))));
console.log(two(plus(two(times(two(minus(one())))))));
console.log(zero(plus(one(dividedBy(one())))));
console.log(one(dividedBy(zero())));
console.log(one());