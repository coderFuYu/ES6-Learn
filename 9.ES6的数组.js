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


// let buffer = new ArrayBuffer(10);
// console.log(buffer.byteLength); // 10
// // 分割已有数组缓冲区
// let buffer = new ArrayBuffer(10);
// let buffer1 = buffer.slice(1, 3);
// console.log(buffer1.byteLength); // 2


// // 默认 DataView 可操作数组缓冲区全部内容
// let buffer = new ArrayBuffer(10);
// dataView = new DataView(buffer);
// dataView.setInt8(0,1);
// console.log(dataView.getInt8(0)); // 1
//
// // 通过设定偏移量(参数2)与长度(参数3)指定 DataView 可操作的字节范围
// let buffer1 = new ArrayBuffer(10);
// dataView1 = new DataView(buffer1, 0, 3);
// dataView1.setInt8(5,1); // RangeError


// let buffer = new ArrayBuffer(10),
//     view = new Int8Array(buffer);
// console.log(view.byteLength); // 10


// let view = new Int32Array(10);
// console.log(view.byteLength); // 40
// console.log(view.length);     // 10
//
// // 不传参则默认长度为0
// // 在这种情况下数组缓冲区分配不到空间，创建的定型数组不能用来保存数据
// let view1 = new Int32Array();
// console.log(view1.byteLength); // 0
// console.log(view1.length);     // 0
//
// // 可接受参数包括定型数组、可迭代对象、数组、类数组对象
// let arr = Array.from({
//   0: '1',
//   1: '2',
//   2: 3,
//   length: 3
// });
// let view2 = new Int16Array([1, 2]),
//     view3 = new Int32Array(view2),
//     view4 = new Int16Array(new Set([1, 2, 3])),
//     view5 = new Int16Array([1, 2, 3]),
//     view6 = new Int16Array(arr);
// console.log(view2 .buffer === view3.buffer); // false
// console.log(view4.byteLength); // 6
// console.log(view5.byteLength); // 6
// console.log(view6.byteLength); // 6


// let view = new Int16Array([1, 2]);
// view.length = 3;
// console.log(view.length); // 2


// let view = new Int16Array([1, 2]);
// for(let [k, v] of view.entries()){
//   console.log(k, v);
// }
// // 0 1
// // 1 2


// let view = new Int16Array([1, 2]);
// view.find((n) > 1); // 2


// let view = Int16Array.of(1, 2);
// console.log(view instanceof Int16Array); // true


// let view = new Int16Array([1, 2]);
// console.log(Array.isArray(view)); // false


// // set 方法
// // 参数1：一个定型数组或普通数组
// // 参数2：可选，偏移量，开始插入数据的位置，默认为0
// let view= new Int16Array(4);
// view.set([1, 2]);
// view.set([3, 4], 2);
// console.log(view); // [1, 2, 3, 4]
//
// // subarray 方法
// // 参数1：可选，开始位置
// // 参数2：可选，结束位置(不包含结束位置)
// let view= new Int16Array([1, 2, 3, 4]),
//     subview1 = view.subarray(),
//     subview2 = view.subarray(1),
//     subview3 = view.subarray(1, 3);
// console.log(subview1); // [1, 2, 3, 4]
// console.log(subview2); // [2, 3, 4]
// console.log(subview3); // [2, 3]


// let arr = [1, 2],
//     arr1 = [...arr];
// console.log(arr1); // [1, 2]
//
// // 数组含空位
// let arr2 = [1, , 3],
//     arr3 = [...arr2];
// console.log(arr3); [1, undefined, 3]


// console.log([...[1, 2],...[3, 4]]); // [1, 2, 3, 4]
