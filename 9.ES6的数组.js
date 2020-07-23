// console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
//
// // 参数值可为不同类型
// console.log(Array.of(1, '2', true)); // [1, '2', true]
//
// // 参数为空时返回空数组
// console.log(Array.of()); // []


// // 参数为数组,返回与原数组一样的数组
// console.log(Array.from([1, 2])); // [1, 2]
//
// // 参数含空位
// console.log(Array.from([1, , 3])); // [1, undefined, 3]


// Array.from(arrayLike[, mapFn[, thisArg]])


// console.log(Array.from([1, 2, 3])); // [1, 2, 3]
// console.log(Array.from([1, 2, 3], (n) => n * 2)); // [2, 4, 6]


// let map = {
//   do: function(n) {
//     return n * 2;
//   }
// }
// let arrayLike = [1, 2, 3];
// console.log(Array.from(arrayLike, function (n){
//   return this.do(n);
// }, map)); // [2, 4, 6]

// let arr = Array.from({
//   0: '1',
//   1: '2',
//   2: 3,
//   length: 3
// });
// console.log(); // ['1', '2', 3]
//
// // 没有 length 属性,则返回空数组
// let array = Array.from({
//   0: '1',
//   1: '2',
//   2: 3,
// });
// console.log(array); // []
//
// // 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组
// let array1 = Array.from({
//   a: 1,
//   b: 2,
//   length: 2
// });
// console.log(array1); // [undefined, undefined]


// let map = new Map();
// map.set('key0', 'value0');
// map.set('key1', 'value1');
// console.log(Array.from(map)); // [['key0', 'value0'],['key1',
// // 'value1']]


// let arr = [1, 2, 3];
// let set = new Set(arr);
// console.log(Array.from(set)); // [1, 2, 3]


// let str = 'abc';
// console.log(Array.from(str)); // ["a", "b", "c"]


// let arr = Array.of(1, 2, 3, 4);
// console.log(arr.find(item => item > 2)); // 3
//
// // 数组空位处理为 undefined
// console.log([, 1].find(n => true)); // undefined


// let arr = Array.of(1, 2, 1, 3);
// // 参数1：回调函数
// // 参数2(可选)：指定回调函数中的 this 值
// console.log(arr.findIndex(item => item = 1)); // 0
//
// // 数组空位处理为 undefined
// console.log([, 1].findIndex(n => true)); //0


// let arr = Array.of(1, 2, 3, 4);
// // 参数1：用来填充的值
// // 参数2：被填充的起始索引
// // 参数3(可选)：被填充的结束索引，默认为数组末尾
// console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]


// // 参数1：被修改的起始索引
// // 参数2：被用来覆盖的数据的起始索引
// // 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
// console.log([1, 2, 3, 4].copyWithin(0,2,4)); // [3, 4, 3, 4]
//
// // 参数1为负数表示倒数
// console.log([1, 2, 3, 4].copyWithin(-2, 0)); // [1, 2, 1, 2]
//
// console.log([1, 2, ,4].copyWithin(0, 2, 4)); // [, 4, , 4]


// for(let [key, value] of ['a', 'b'].entries()){
//   console.log(key, value);
// }
// // 0 "a"
// // 1 "b"
//
// // 不使用 for... of 循环
// let entries = ['a', 'b'].entries();
// console.log(entries.next().value); // [0, "a"]
// console.log(entries.next().value); // [1, "b"]
//
// // 数组含空位
// console.log([...[,'a'].entries()]); // [[0, undefined], [1, "a"]]


// for(let key of ['a', 'b'].keys()){
//   console.log(key);
// }
// // 0
// // 1
//
// // 数组含空位
// console.log([...[,'a'].keys()]); // [0, 1]


// for(let value of ['a', 'b'].values()){
//   console.log(value);
// }
// // "a"
// // "b"
//
// // 数组含空位
// console.log([...[,'a'].values()]); // [undefined, "a"]


// // 参数1：包含的指定值
// console.log([1, 2, 3].includes(1));   // true
//
// // 参数2：可选，搜索的起始索引，默认为0
// console.log([1, 2, 3].includes(1, 2)); // false
//
// // NaN 的包含判断
// console.log([1, NaN, 3].includes(NaN)); // true


// console.log([1 ,[2, 3]].flat()); // [1, 2, 3]
//
// // 指定转换的嵌套层数
// console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
//
// // 不管嵌套多少层
// console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
//
// // 自动跳过空位
// console.log([1, [2, , 3]].flat());// [1, 2, 3]


// 参数1：遍历函数，该遍历函数可接受3个参数：当前元素、当前元素索引、原数组
// 参数2：指定遍历函数中 this 的指向
// console.log([1, 2, 3].flatMap(n => [n * 2])); // [2, 4, 6]


let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); // 10
// 分割已有数组缓冲区
let buffer = new ArrayBuffer(10);
let buffer1 = buffer.slice(1, 3);
console.log(buffer1.byteLength); // 2
