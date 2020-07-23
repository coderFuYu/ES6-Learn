//  1.基本用法:
// {
//   let a = 0;
//   console.log(a);   // 0
// }
// console.log(a);   // 报错 ReferenceError: a is not defined


//  2.代码块内有效
// let 是在代码块内有效，var 是在全局范围内有效:
// {
//   let a = 0;
//   var b = 1;
// }
// console.log(a);  // ReferenceError: a is not defined
// console.log(b);  // 1


//  3.不能重复声明
//  let 只能声明一次 var 可以声明多次:
//  let a = 1;
//  let a = 2;
//  var b = 3;
//  var b = 4;
//  console.log(a);  // Identifier 'a' has already been declared
//  console.log(b);  // 4


// 4.for 循环计数器很适合用 let
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   })
// }// 输出十个 10
//
// for (let j = 0; j < 10; j++) {
//   setTimeout(function () {
//     console.log(j);
//   })
// }// 输出 0123456789


// 5.不存在变量提升
// console.log(a);  //ReferenceError: a is not defined
// let a = "apple";
// console.log(b);  //undefined
// var b = "banana";


// 6.const使用
// const PI = "3.1415926";
// console.log(PI);  // 3.1415926
// const MY_AGE;  // SyntaxError: Missing initializer in const declaration


// 7.const的指针性质
// {
//   const ARR = [5,6];
//   ARR.push(7);
//   console.log(ARR); // [5,6,7]
//   ARR = 10; // TypeError
// }


// 8.暂时性死区:
// var PI = "a";
// if (true) {
//   console.log(PI);  // ReferenceError: PI is not defined
//   const PI = "3.1415926";
// }
