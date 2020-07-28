// /*-----export [test.js]-----*/
// let myName = "Tom";
// let myAge = 20;
// let myfn = function(){
//   return "My name is" + myName + "! I'm '" + myAge + "years old."
// }
// let myClass =  class myClass {
//   static a = "yeah!";
// }
// export { myName, myAge, myfn, myClass }
//
// /*-----import [xxx.js]-----*/
// import { myName, myAge, myfn, myClass } from "./test.js";
// console.log(myfn());// My name is Tom! I'm 20 years old.
// console.log(myAge);// 20
// console.log(myName);// Tom
// console.log(myClass.a );// yeah!


// /*-----export [test.js]-----*/
// let myName = "Tom";
// export { myName as exportName }
//
// /*-----import [xxx.js]-----*/
// import { exportName } from "./test.js";
// console.log(exportName);// Tom
// 使用 as 重新定义导出的接口名称，隐藏模块内部的变量
// /*-----export [test1.js]-----*/
// let myName = "Tom";
// export { myName }
// /*-----export [test2.js]-----*/
// let myName = "Jerry";
// export { myName }
// /*-----import [xxx.js]-----*/
// import { myName as name1 } from "./test1.js";
// import { myName as name2 } from "./test2.js";
// console.log(name1);// Tom
// console.log(name2);// Jerry


// import {a} from "./xxx.js"
// a = {}; // error
//
// import {a} from "./xxx.js"
// a.foo = "hello"; // a = { foo : 'hello' }


// import { a } "./xxx.js";
// import { a } "./xxx.js";
// // 相当于 import { a } "./xxx.js";
//
// import { a } from "./xxx.js";
// import { b } from "./xxx.js";
// // 相当于 import { a, b } from "./xxx.js";


// import { "f" + "oo" } from "methods";
// // error
// let module = "methods";
// import { foo } from module;
// // error
// if (true) {
// import { foo } from "method1";
// } else {
// import { foo } from "method2";
// }
// // error


// var a = "My name is Tom!";
// export default a; // 仅有一个
// export default var c = "error";
// // error，default 已经是对应的导出变量，不能跟着变量声明语句
//
// import b from "./xxx.js"; // 不需要加{}， 使用任意变量接收


export { foo, bar } from "methods";

// 约等于下面两段语句，不过上面导入导出方式该模块没有导入 foo 与 bar
import { foo, bar } from "methods";
export { foo, bar };

/* ------- 特点 1 --------*/
// 普通改名
export { foo as bar } from "methods";
// 将 foo 转导成 default
export { foo as default } from "methods";
// 将 default 转导成 foo
export { default as foo } from "methods";

/* ------- 特点 2 --------*/
export * from "methods";
