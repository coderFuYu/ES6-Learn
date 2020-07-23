// const age = 12;
// const name = "Amy";
// const person = {age, name};
// person   //{age: 12, name: "Amy"}
// //等同于
// const person = {age: age, name: name}


// const person = {
//   sayHi(){
//     console.log("Hi");
//   }
// }
// person.sayHi();  //"Hi"
// //等同于
// const person = {
//   sayHi:function(){
//     console.log("Hi");
//   }
// }
// person.sayHi();//"Hi"


// const obj = {
//   * myGenerator() {
//     yield 'hello world';
//   }
// };
// //等同于
// const obj = {
//   myGenerator: function* () {
//     yield 'hello world';
//   }
// };


// const obj = {
//   ["he"+"llo"](){
//     return "Hi";
//   }
// }
// obj.hello();  //"Hi"


// const hello = "Hello";
// const obj = {
//   [hello]
// };
// obj  //SyntaxError: Unexpected token }
//
// const hello = "Hello";
// const obj = {
//   [hello+"2"]:"world"
// };
// obj  //{Hello2: "world"}


// let person = {name: "Amy", age: 15};
// let someone = { ...person };
// someone;  //{name: "Amy", age: 15}


// let age = {age: 15};
// let name = {name: "Amy"};
// let person = {...age, ...name};
// person;  //{age: 15, name: "Amy"}


// let person = {name: "Amy", age: 15};
// let someone = { ...person, name: "Mike", age: 17};
// someone;  //{name: "Mike", age: 17}


// let person = {name: "Amy", age: 15};
// let someone = {name: "Mike", age: 17, ...person};
// someone;  //{name: "Amy", age: 15}

// let a = {...{}, a: 1, b: 2};
// a;  //{a: 1, b: 2}


// let b = {...null, ...undefined, a: 1, b: 2};
// b;  //{a: 1, b: 2}


// let target = {a: 1};
// let object2 = {b: 2};
// let object3 = {c: 3};
// Object.assign(target,object2,object3);
// // 第一个参数是目标对象，后面的参数是源对象
// target;  // {a: 1, b: 2, c: 3


// Object.assign(3);         // Number {3}
// typeof Object.assign(3);  // "object"


// Object.assign(null);       // TypeError: Cannot convert undefined or null to object
// Object.assign(undefined);  // TypeError: Cannot convert undefined or null to object
// // 当参数不止一个时，null 和 undefined 不放第一个，即不为目标对象时，会跳过 null 和 undefined ，不报错
// Object.assign(1,undefined);  // Number {1}
// Object.assign({a: 1},null);  // {a: 1}
//
// Object.assign(undefined,{a: 1});  // TypeError: Cannot convert undefined or null to object


// let sourceObj = { a: { b: 1}};
// let targetObj = {c: 3};
// Object.assign(targetObj, sourceObj);
// targetObj.a.b = 2;
// sourceObj.a.b;  // 2


// targetObj = { a: { b: 1, c:2}};
// sourceObj = { a: { b: "hh"}};
// Object.assign(targetObj, sourceObj);
// targetObj;  // {a: {b: "hh"}}


// Object.assign([2,3], [5]);  // [5,3]


// Object.is("q","q");      // true
// Object.is(1,1);          // true
// Object.is([1],[1]);      // false
// Object.is({q:1},{q:1});  // false


// //一是+0不等于-0
// Object.is(+0,-0);  //false
// +0 === -0  //true
// //二是NaN等于本身
// Object.is(NaN,NaN); //true
// NaN === NaN  //false


// let person = {name: "Amy", age: [10,20]};
// let someone = { ...person };
// someone.age[0]=16;  //{name: "Amy", age: 15}
// console.log(person.age);



// 赋值
// let a={name:'aaa'};
// let b=a;
// b.name='bbb';
// console.log(a);

//浅拷贝
// let a={name:'aaa',age:[10,20]}
// let b={...a}
// b.name='bbb';
// b.age[0]=15;
// console.log(a);


//深拷贝
// let a={name:'aaa',age:[10,20]}
// let b=JSON.parse(JSON.stringify(a));
// b.name='bbb';
// b.age[0]=15;
// console.log(a);
// console.log(b);


