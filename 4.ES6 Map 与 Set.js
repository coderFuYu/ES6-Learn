// key 是字符串
// var myMap = new Map();
// var keyString = "a string";
//
// myMap.set(keyString, "和键'a string'关联的值");
//
// console.log(myMap.get(keyString));    // "和键'a string'关联的值"
// console.log(myMap.get("a string"));   // "和键'a string'关联的值"
// 因为 keyString === 'a string'


// key 是对象
// var myMap = new Map();
// var keyObj = {};
// myMap.set(keyObj, "和键 keyObj 关联的值")
// console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
// console.log(myMap.get({})); // undefined, 因为 keyObj !== {}


// key是函数
// var myMap = new Map();
// var keyFunc = function () {
// };// 函数
// myMap.set(keyFunc, "和键 keyFunc 关联的值");
// console.log(myMap.get(keyFunc)); // "和键 keyFunc 关联的值"
// console.log(myMap.get(function () {})); // undefined, 因为 keyFunc !== function () {}


// key是NaN
// var myMap = new Map();
// myMap.set(NaN, "not a number");
// myMap.get(NaN); // "not a number"
// var otherNaN = Number("foo");
// console.log(myMap.get(otherNaN)); // "not a number"


// Map 迭代
// for...of
// var myMap = new Map();
// myMap.set(0, "zero");
// myMap.set(1, "one");
// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
// for (var [key, value] of myMap) {
//   console.log(key + " = " + value);
// }
// for (var [key, value] of myMap.entries()) {
//   console.log(key + " = " + value);
// }
/* 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。 */

// 将会显示两个log。 一个是 "0" 另一个是 "1"
// for (var key of myMap.keys()) {
//   console.log(key);
// }
// /* 这个 keys 方法返回一个新的 Iterator 对象， 它按插入顺序包含了 Map 对象中每个元素的键。 */
//
// // 将会显示两个log。 一个是 "zero" 另一个是 "one"
// for (var value of myMap.values()) {
//   console.log(value);
// }
/* 这个 values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值。 */


// forEach()
// var myMap = new Map();
// myMap.set(0, "zero");
// myMap.set(1, "one");
//
// 将会显示两个 logs。 一个是 "0 = zero" 另一个是 "1 = one"
// myMap.forEach((value, key)=>{
//   console.log(key + " = " + value);
// }, myMap)


// Map 与 Array的转换
// var kvArray = [["key1", "value1"], ["key2", "value2"]];
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
// var myMap = new Map(kvArray);
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
// var outArray = Array.from(myMap);
// console.log(outArray);


// Map 的克隆
// var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
// var myMap2 = new Map(myMap1);
// console.log(myMap1 === myMap2);
// 打印 false。 Map 对象构造函数生成实例，迭代出新的对象。


// Map的合并
// var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
// var second = new Map([[1, 'uno'], [2, 'dos']]);
// // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
// var merged = new Map([...first, ...second]);
// console.log(merged);


// Set应用
// let mySet = new Set();
// mySet.add(1); // Set(1) {1}
// mySet.add(5); // Set(2) {1, 5}
// mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
// mySet.add("some text");// Set(3) {1, 5, "some text"} 这里体现了类型的多样性
// var o = {a: 1, b: 2};
// mySet.add(o);
// mySet.add({a: 1, b: 2});
// // Set(5) {1, 5, "some text", {…}, {…}}
// // 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储


// Set类型转换
// // Array 转 Set
// var mySet = new Set(["value1", "value2", "value3"]);
// // 用...操作符，将 Set 转 Array
// var myArray = [...mySet];
// // String 转 Set
// var mySet = new Set('hello');  // Set(4) {"h", "e", "l", "o"}
// // 注：Set 中 toString 方法是不能将 Set 转换成 String


// Set对象作用
// 数组去重
// var mySet = new Set([1, 2, 3, 4, 4]);
// console.log([...mySet]); // [1, 2, 3, 4]

// 并集
// var a = new Set([1, 2, 3]);
// var b = new Set([4, 3, 2]);
// var union = new Set([...a, ...b]); // {1, 2, 3, 4}
// console.log(union);


//交集
// var a = new Set([1, 2, 3]);
// var b = new Set([4, 3, 2]);
// var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}
// console.log(intersect);


//减集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}
console.log(difference);
