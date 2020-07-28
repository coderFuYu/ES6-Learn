// // 匿名类
// let Example = class {
//   constructor(a) {
//     this.a = a;
//   }
// }
// // 命名类
// let Example = class Example {
//   constructor(a) {
//     this.a = a;
//   }
// }


// class Example {
//   constructor(a) {
//     this.a = a;
//   }
// }


// class Example{}
// class Example{}
// // Uncaught SyntaxError: Identifier 'Example' has already been
// // declared
//
// let Example1 = class{}
// class Example{}
// // Uncaught SyntaxError: Identifier 'Example' has already been
// // declared


// new Example();
// class Example {}


// Example.prototype={
//   //methods
// }


// Object.assign(Example.prototype,{
//   //methods
// })


// class Example {
// // 新提案
//   static a = 2;
// }
// // 目前可行写法
// Example.b = 2;


// class Example{}
// Example.prototype.a = 2;


// class Example {
//   a = 2;
//   constructor () {
//     console.log(this.a);
//   }
// }


// let Example=class Exam {
//   constructor(a) {
//     this.a = a;
//   }
// }
// console.log(Example.name); // Exam
//
// let Example=class {
//   constructor(a) {
//     this.a = a;
//   }
// }
// console.log(Example.name); // Example


// class Example{
//   constructor(){
//     console.log('我是constructor');
//   }
// }
// new Example(); // 我是constructor


// class Test {
//   constructor(){
//     // 默认返回实例对象 this
//   }
// }
// console.log(new Test() instanceof Test); // true
//
// class Example {
//   constructor(){
//     // 指定返回对象
//     return new Test();
//   }
// }
// console.log(new Example() instanceof Example); // false


// class Example{
//   static sum(a, b) {
//     console.log(a+b);
//   }
// }
// Example.sum(1, 2); // 3


// class Example {
//   sum(a, b) {
//     console.log(a + b);
//   }
// }
// let exam = new Example();
// exam.sum(1, 2); // 3


// class Example {
//   constructor() {
//     this.sum = (a, b) => {
//       console.log(a + b);
//     }
//   }
// }


// class Example {}
//
// let exam1 = Example();
// // Class constructor Example cannot be invoked without 'new'


// class Example {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//     console.log('Example');
//   }
//   sum() {
//     return this.a + this.b;
//   }
// }
// let exam1 = new Example(2, 1);
// let exam2 = new Example(3, 1);
// console.log(exam1._proto_ == exam2._proto_); // true
//
// exam1._proto_.sub = function() {
//   return this.a - this.b;
// }
// console.log(exam1.sub()); // 1
// console.log(exam2.sub()); // 2


// function testable(target) {
//   target.isTestable = true;
// }
// @testable
// class Example {}
// Example.isTestable; // true


// function testable(isTestable) {
//   return function(target) {
//     target.isTestable=isTestable;
//   }
// }
// @testable(true)
// class Example {}
// Example.isTestable; // true


// class Example {
//   @writable
//   sum(a, b) {
//     return a + b;
//   }
// }
// function writable(target, name, descriptor) {
//   descriptor.writable = false;
//   return descriptor; // 必须返回
// }


// class Example {
//   @logMethod(1)
//   @logMthod(2)
//   sum(a, b){
//     return a + b;
//   }
// }
// function logMethod(id) {
//   console.log('evaluated logMethod'+id);
//   return (target, name, desctiptor) => console.log('excuted         logMethod '+id);
// }
// // evaluated logMethod 1
// // evaluated logMethod 2
// // excuted logMethod 2
// // excuted logMethod 1


// class Example{
//   constructor(a, b) {
//     this.a = a; // 实例化时调用 set 方法
//     this.b = b;
//   }
//   get a(){
//     console.log('getter');
//     return this.a;
//   }
//   set a(a){
//     console.log('setter');
//     this.a = a; // 自身递归调用
//   }
// }
// let exam = new Example(1,2); // 不断输出 setter ，最终导致 RangeError
// class Example1{
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   get a(){
//     console.log('getter');
//     return this._a;
//   }
//   set a(a){
//     console.log('setter');
//     this._a = a;
//   }
// }
// let exam1 = new Example1(1,2); // 只输出 setter , 不会调用 getter 方法
// console.log(exam._a); // 1, 可以直接访问


// class Example {
//   constructor(a) {
//     this.a = a;
//   }
//   get a() {
//     return this.a;
//   }
// }
// let exam = new Example(1); // Uncaught TypeError: Cannot set property // a of #<Example> which has only a getter


// class Father {
//   constructor(){}
//   get a() {
//     return this._a;
//   }
// }
// class Child extends Father {
//   constructor(){
//     super();
//   }
//   set a(a) {
//     this._a = a;
//   }
// }
// let test = new Child();
// test.a = 2;
// console.log(test.a); // undefined
//
// class Father1 {
//   constructor(){}
//   // 或者都放在子类中
//   get a() {
//     return this._a;
//   }
//   set a(a) {
//     this._a = a;
//   }
// }
// class Child1 extends Father1 {
//   constructor(){
//     super();
//   }
// }
// let test1 = new Child1();
// test1.a = 2;
// console.log(test1.a); // 2


// class Child extends Father { ... }


// class Father {
//   constructor() {}
// }
// class Child extends Father {
//   constructor() {}
//   // or
//   // constructor(a) {
//   // this.a = a;
//   // super();
//   // }
// }
// let test = new Child(); // Uncaught ReferenceError: Must call super
// // constructor in derived class before accessing 'this' or returning
// // from derived constructor


// class Father {
//   test(){
//     return 0;
//   }
//   static test1(){
//     return 1;
//   }
// }
// class Child extends Father {
//   constructor(){
//     super();
//   }
// }
// class Child1 extends Father {
//   test2() {
//     super(); // Uncaught SyntaxError: 'super' keyword unexpected
//     // here
//   }
// }


// class Child2 extends Father {
//   constructor(){
//     super();
//     // 调用父类普通方法
//     console.log(super.test()); // 0
//   }
//   static test3(){
//     // 调用父类静态方法
//     return super.test1+2;
//   }
// }
// Child2.test3(); // 3


var Father = {
  // ...
}
class Child extends Father {
  // ...
}
// Uncaught TypeError: Class extends value #<Object> is not a constructor or null

// 解决方案
Object.setPrototypeOf(Child.prototype, Father);
