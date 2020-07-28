// const items = ["zero", "one", "two"];
// const it = items[Symbol.iterator]();
//
// it.next();
// //{value: "zero", done: false}
// it.next();
// //{value: "one", done: false}
// it.next();
// //{value: "two", done: false}
// it.next();
// //{value: undefined, done: true}


// for (let item of ["zero", "one", "two"]) {
//   console.log(item);
// }
// // output:
// // zero
// // one
// // two


// for (const c of 'z\uD83D\uDC0A') {
//   console.log(c);
// }
// // output:
// // z
// // \uD83D\uDC0A


// const map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
//
// for (let item of map) {
//   console.log(item);
// }
// // output:
// // [0, "zero"]
// // [1, "one"]


// const set = new Set();
// set.add("zero");
// set.add("one");
//
// for (let item of set) {
//   console.log(item);
// }
// // output:
// // zero
// // one


// function args() {
//   for (let item of arguments) {
//     console.log(item);
//   }
// }
// args("zero", "one");
// // output:
// // zero
// // one


// // TypeError
// for (let item of {}) {
//   console.log(item);
// }


// const nums = ["zero", "one", "two"];
//
// for (let num of nums) {
//   console.log(num);
// }
// TypedArray
// const typedArray1 = new Int8Array(6);
// typedArray1[0] = 10;
// typedArray1[1] = 11;
//
// for (let item of typedArray1) {
//   console.log(item);
// }


// const str = "zero";
//
// for (let item of str) {
//   console.log(item);
// }


// let myMap = new Map();
// myMap.set(0, "zero");
// myMap.set(1, "one");
// myMap.set(2, "two");
//
// // 遍历 key 和 value
// for (let [key, value] of myMap) {
//   console.log(key + " = " + value);
// }
// for (let [key, value] of myMap.entries()) {
//   console.log(key + " = " + value);
// }
//
// // 只遍历 key
// for (let key of myMap.keys()) {
//   console.log(key);
// }
//
// // 只遍历 value
// for (let value of myMap.values()) {
//   console.log(value);
// }


// let mySet = new Set();
// mySet.add("zero");
// mySet.add("one");
// mySet.add("two");
//
// // 遍历整个 set
// for (let item of mySet) {
//   console.log(item);
// }
//
// // 只遍历 key 值
// for (let key of mySet.keys()) {
//   console.log(key);
// }
//
// // 只遍历 value
// for (let value of mySet.values()) {
//   console.log(value);
// }
//
// // 遍历 key 和 value ，两者会相等
// for (let [key, value] of mySet.entries()) {
//   console.log(key + " = " + value);
// }


// const arrayLink = {length: 2, 0: "zero", 1: "one"}


// // 报 TypeError 异常
// for (let item of arrayLink) {
//   console.log(item);
// }
//
// // 正常运行
// // output:
// // zero
// // one
// for (let item of Array.from(arrayLink)) {
//   console.log(item);
// }


// const nums = ["zero", "one", "two"];
//
// for (const num of nums) {
//   console.log(num);
// }
// // 报 ReferenceError
// console.log(num);


// const nums = ["zero", "one", "two"];
//
// forv (var num of nums) {
//   console.log(num);
// }
// // output: two
// console.log(num);
