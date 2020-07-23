// 1.基本用法
// let sy = Symbol("KK");
// console.log(sy);   // Symbol(KK)
// console.log(typeof (sy));       // "symbol"
//
// 相同参数 Symbol() 返回的值不相等
// let sy1 = Symbol("kk");
// console.log(sy === sy1);       // false


// 2.作为属性名
// let sy = Symbol("key1");
// 写法1
// let syObject = {};
// syObject[sy] = "kk";
// console.log(syObject);    // {Symbol(key1): "kk"}
//
// 写法2
// let syObject = {
//   [sy]: "kk"
// };
// console.log(syObject);    // {Symbol(key1): "kk"}
//
// 写法3
// let syObject = {};
// Object.defineProperty(syObject, sy, {value: "kk"});
// console.log(syObject);   // {Symbol(key1): "kk"}


// 3.不能用.运算符，要用方括号
// let syObject = {};
// syObject[sy] = "kk";
// console.log(syObject[sy]);  // "kk"
// console.log(syObject.sy);   // undefined


// 4.Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。
// 但是不会出现在 for...in 、 for...of 的循环中，
// 也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。
// 如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。
// let syObject = {};
// syObject[sy] = "kk";
// console.log(syObject);
// for (let i in syObject) {
//   console.log(i);
// }    // 无输出

// Object.keys(syObject);                     // []
// Object.getOwnPropertySymbols(syObject);    // [Symbol(key1)]
// Reflect.ownKeys(syObject);                 // [Symbol(key1)]

// 5.在 ES5 使用字符串表示常量。
// const COLOR_RED = "red";
// const COLOR_YELLOW = "yellow";
// const COLOR_BLUE = "blue";
//
// 但是用字符串不能保证常量是独特的，这样会引起一些问题
// const COLOR_RED = "red";
// const COLOR_YELLOW = "yellow";
// const COLOR_BLUE = "blue";
// const MY_BLUE = "blue";
// try {
//   var color = "green"; // green 引发异常
//   var colorName = getConstantName(color);
// } catch (e) {
//   var colorName = "unknown";
//   console.log(e.message, e.name); // 传递异常对象到错误处理
// }
// function ColorException(message) {
//   this.message = message;
//   this.name = "ColorException";
// }
// function getConstantName(color) {
//   switch (color) {
//     case COLOR_RED :
//       return "COLOR_RED";
//     case COLOR_YELLOW :
//       return "COLOR_YELLOW ";
//     case COLOR_BLUE:
//       return "COLOR_BLUE";
//     case MY_BLUE:
//       return "MY_BLUE";
//     default:
//       throw new ColorException("Can't find this color");
//   }
// }

// 但是使用 Symbol 定义常量，这样就可以保证这一组常量的值都不相等。用 Symbol 来修改上面的例子。
// const COLOR_RED = Symbol("red");
// const COLOR_YELLOW = Symbol("yellow");
// const COLOR_BLUE = Symbol("blue");
// const MY_BLUE = Symbol("blue");
//
// function ColorException(message) {
//   this.message = message;
//   this.name = "ColorException";
// }
//
// function getConstantName(color) {
//   switch (color) {
//     case COLOR_RED :
//       return "COLOR_RED";
//     case COLOR_YELLOW :
//       return "COLOR_YELLOW ";
//     case COLOR_BLUE:
//       return "COLOR_BLUE";
//     default:
//       throw new ColorException("Can't find this color");
//   }
// }
//
// try {
//
//   var color = "green"; // green 引发异常
//   var colorName = getConstantName(color);
// } catch (e) {
//   var colorName = "unknown";
//   console.log(e.message, e.name); // 传递异常对象到错误处理
// }


// Symbol.for()
// let yellow = Symbol("Yellow");
// let yellow1 = Symbol.for("Yellow");
// yellow === yellow1;      // false
//
// let yellow2 = Symbol.for("Yellow");
// yellow1 === yellow2;     // true


// Symbol.keyFor()
// let yellow1 = Symbol.for("Yellow");
// Symbol.keyFor(yellow1);    // "Yellow"
