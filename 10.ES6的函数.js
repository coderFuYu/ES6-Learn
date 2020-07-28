// function fn(name,age=17){
//   console.log(name+","+age);
// }
// fn("Amy",18);  // Amy,18
// fn("Amy","");  // Amy,
// fn("Amy");     // Amy,17


// // 不报错
// function fn(name,name){
//   console.log(name);
// }
//
// // 报错
// //SyntaxError: Duplicate parameter name not allowed in this context
// function fn(name,name,age=17){
//   console.log(name+","+age);
// }


// function fn(name,age=17){
//   console.log(name+","+age);
// }
// fn("Amy",null); // Amy,null


// function f(x,y=x){
//   console.log(x,y);
// }
// f(1);  // 1 1
//
// function f(x=y){
//   console.log(x);
// }
// f();  // ReferenceError: y is not defined


// function f(...values){
//   console.log(values.length);
// }
// f(1,2);      //2
// f(1,2,3,4);  //4


// var f = v => v;
// //等价于
// var f = function(a){
//   return a;
// }
// f(1);  //1


// var f = (a,b) => a+b;
// f(6,2);  //8


// var f = (a,b) => {
//   let result = a+b;
//   return result;
// }
// f(6,2);  // 8


// // 报错
// var f = (id,name) => {id: id, name: name};
// f(6,2);  // SyntaxError: Unexpected token :
//
// // 不报错
// var f = (id,name) => ({id: id, name: name});
// f(6,2);  // {id: 6, name: 2}


// var func = () => {
//   // 箭头函数里面没有 this 对象，
//   // 此时的 this 是外层的 this 对象，即 Window
//   console.log(this)
// }
// func(55)  // Window
//
// var func = () => {
//   console.log(arguments)
// }
// func(55);  // ReferenceError: arguments is not defined


// function fn(){
//   setTimeout(()=>{
//     // 定义时，this 绑定的是 fn 中的 this 对象
//     console.log(this.a);
//   },0)
// }
// var a = 20;
// // fn 的 this 对象为 {a: 19}
// fn.call({a: 18});  // 18


// // 回调函数
// var Person = {
//   'age': 18,
//   'sayHello': function () {
//     setTimeout(function () {
//       console.log(this.age);
//     });
//   }
// };
// var age = 20;
// Person.sayHello();  // 20
//
// var Person1 = {
//   'age': 18,
//   'sayHello': function () {
//     setTimeout(()=>{
//       console.log(this.age);
//     });
//   }
// };
// var age = 20;
// Person1.sayHello();  // 18


// var Person = {
//   'age': 18,
//   'sayHello': ()=>{
//     console.log(this.age);
//   }
// };
// var age = 20;
// Person.sayHello();  // 20
// // 此时 this 指向的是全局对象
//
// var Person1 = {
//   'age': 18,
//   'sayHello': function () {
//     console.log(this.age);
//   }
// };
// var age = 20;
// Person1.sayHello();   // 18
// // 此时的 this 指向 Person1 对象


var button = document.getElementById('userClick');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
