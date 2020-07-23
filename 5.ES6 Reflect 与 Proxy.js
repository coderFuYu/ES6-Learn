// let target = {
//   name: 'Tom',
//   age: 24
// }
// let handler = {
//   get: function(target, key) {
//     console.log('getting '+key);
//     return target[key]; // 不是target.key
//   },
//   set: function(target, key, value) {
//     console.log('setting '+key);
//     target[key] = value;
//   }
// }
// let proxy = new Proxy(target, handler)
// proxy.name     // 实际执行 handler.get

// proxy.age = 25 // 实际执行 handler.set
// getting name
// setting age
// 25

// // target 可以为空对象
// let targetEpt = {}
// let proxyEpt = new Proxy(targetEpt, handler)
// // 调用 get 方法，此时目标对象为空，没有 name 属性
// console.log(proxyEpt.name); // getting name
// // 调用 set 方法，向目标对象中添加了 name 属性
// proxyEpt.name = 'Tom'
// // setting name
// // "Tom"
// // 再次调用 get ，此时已经存在 name 属性
// proxyEpt.name;
// // getting name
// // "Tom"
//
// // 通过构造函数新建实例时其实是对目标对象进行了浅拷贝，因此目标对象与代理对象会互相
// // 影响
// targetEpt;
// // {name: "Tom"}
//
// // handler 对象也可以为空，相当于不设置拦截操作，直接访问目标对象
// let targetEmpty = {}
// let proxyEmpty = new Proxy(targetEmpty,{})
// proxyEmpty.name = "Tom"
// targetEmpty; // {name: "Tom"}


// get(target, propKey, receiver)

// let exam ={
//   name: "Tom",
//   age: 24
// }
// let proxy = new Proxy(exam, {
//   get(target, propKey, receiver) {
//     console.log('Getting ' + propKey);
//     return target[propKey];
//   }
// })
// console.log(proxy.name);
// Getting name
// "Tom"



// let proxy = new Proxy({}, {
//   get(target, propKey, receiver) {
//     // 实现私有属性读取保护
//     if(propKey[0] === '_'){
//       throw new Erro(`Invalid attempt to get private     "${propKey}"`);
//     }
//     console.log('Getting ' + propKey);
//     return target[propKey];
//   }
// });
//
// let obj = Object.create(proxy);
// obj.name
// Getting name


// set(target, propKey, value, receiver)


// let validator = {
//   set: function(obj, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer');
//       }
//       if (value > 200) {
//         throw new RangeError('The age seems invalid');
//       }
//     }
//     // 对于满足条件的 age 属性以及其他属性，直接保存
//     obj[prop] = value;
//   }
// };
// let proxy= new Proxy({}, validator)
// proxy.age = 100;
// console.log(proxy.age);         // 100
// proxy.age = 'oppps' // 报错
// proxy.age = 300     // 报错


// const handler = {
//   set: function(obj, prop, value, receiver) {
//     obj[prop] = receiver;
//   }
// };
// const proxy = new Proxy({}, handler);
// proxy.name= 'Tom';
// console.log(proxy.name === proxy);// true
//
// const exam = {}
// Object.setPrototypeOf(exam, proxy)
// exam.name = "Tom"
// console.log(exam.name === exam); // true


// function sub(a, b){
//   return a - b;
// }
// let handler = {
//   apply: function(target, ctx, args){
//     console.log('handle apply');
//     return Reflect.apply(...arguments);
//   }
// }
// let proxy = new Proxy(sub, handler)
// proxy(2, 1)
// // handle apply
// // 1

// has(target, propKey)


// let  handler = {
//   has: function(target, propKey){
//     console.log("handle has");
//     return propKey in target;
//   }
// }
// let exam = {name: "Tom"}
// let proxy = new Proxy(exam, handler)
// console.log('name' in proxy);
// // handle has
// // true

// construct(target, args)


// let handler = {
//   construct: function (target, args, newTarget) {
//     console.log('handle construct')
//     return Reflect.construct(target, args, newTarget)
//   }
// }
// class Exam {
//   constructor (name) {
//     this.name = name
//   }
// }
// let ExamProxy = new Proxy(Exam, handler)
// let proxyObj = new ExamProxy('Tom')
// console.log(proxyObj)
// // handle construct
// // exam {name: "Tom"}


// deleteProperty(target, propKey)

// defineProperty(target, propKey, propDesc)


// let handler = {
//   defineProperty: function(target, propKey, propDesc){
//     console.log("handle defineProperty");
//     return true;
//   }
// }
// let target = {}
// let proxy = new Proxy(target, handler)
// proxy.name = "Tom"
// // handle defineProperty
// target
// // {name: "Tom"}
//
// // defineProperty 返回值为false，添加属性操作无效
// let handler1 = {
//   defineProperty: function(target, propKey, propDesc){
//     console.log("handle defineProperty");
//     return false;
//   }
// }
// let target1 = {}
// let proxy1 = new Proxy(target1, handler1)
// proxy1.name = "Jerry"
// target1
// // {}


// getOwnPropertyDescriptor(target, propKey)


// let handler = {
//   getOwnPropertyDescriptor: function(target, propKey){
//     return Object.getOwnPropertyDescriptor(target, propKey);
//   }
// }
// let target = {name: "Tom"}
// let proxy = new Proxy(target, handler)
// console.log(Object.getOwnPropertyDescriptor(proxy, 'name'));
// // {value: "Tom", writable: true, enumerable: true, configurable:true}


// getPrototypeOf(target)


// Object.prototype._proto_
// Object.prototype.isPrototypeOf()
// Object.getPrototypeOf()
// Reflect.getPrototypeOf()
// instanceof


// let exam = {}
// let proxy = new Proxy({},{
//   getPrototypeOf: function(target){
//     return exam;
//   }
// })
// Object.getPrototypeOf(proxy) // {}


// let proxy = new Proxy({},{
//   getPrototypeOf: function(target){
//     return true;
//   }
// })
// Object.getPrototypeOf(proxy)
// // TypeError: 'getPrototypeOf' on proxy: trap returned neither object // nor null


// isExtensible(target)


// let proxy = new Proxy({},{
//   isExtensible:function(target){
//     return true;
//   }
// })
// Object.isExtensible(proxy) // true


// let proxy = new Proxy({},{
//   isExtensible:function(target){
//     return false;
//   }
// })
// Object.isExtensible(proxy)
// // TypeError: 'isExtensible' on proxy: trap result does not reflect
// // extensibility of proxy target (which is 'true')


// ownKeys(target)


// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()
// or...in


let proxy = new Proxy( {
  name: "Tom",
  age: 24
}, {
  ownKeys(target) {
    return ['name'];
  }
});
Object.keys(proxy)
// [ 'name' ]f返回结果中，三类属性会被过滤：
//          - 目标对象上没有的属性
//          - 属性名为 Symbol 值的属性
//          - 不可遍历的属性

// let target = {
//   name: "Tom",
//   [Symbol.for('age')]: 24,
// };
// // 添加不可遍历属性 'gender'
// Object.defineProperty(target, 'gender', {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: 'male'
// });
// let handler = {
//   ownKeys(target) {
//     return ['name', 'parent', Symbol.for('age'), 'gender'];
//   }
// };
// let proxy = new Proxy(target, handler);
// Object.keys(proxy)
// // ['name']


// // 只有目标对象不可扩展时（即 Object.isExtensible(proxy) 为 false ），
// // proxy.preventExtensions 才能返回 true ，否则会报错
// var proxy = new Proxy({}, {
//   preventExtensions: function(target) {
//     return true;
//   }
// });
// // 由于 proxy.preventExtensions 返回 true，此处也会返回 true，因此会报错
// Object.preventExtensions(proxy) 被// TypeError: 'preventExtensions' on proxy: trap returned truish but // the proxy target is extensible
//
// // 解决方案
// var proxy = new Proxy({}, {
//   preventExtensions: function(target) {
//     // 返回前先调用 Object.preventExtensions
//     Object.preventExtensions(target);
//     return true;
//   }
// });
// Object.preventExtensions(proxy)
// // Proxy {}


// setPrototypeOf


// let proto = {}
// let proxy = new Proxy(function () {}, {
//       setPrototypeOf: function(target, proto) {
//         console.log("setPrototypeOf");
//         return true;
//       }
//     }
// );
// Object.setPrototypeOf(proxy, proto);
// // setPrototypeOf

// Proxy.revocable()


// let {proxy, revoke} = Proxy.revocable({}, {});
// proxy.name = "Tom";
// revoke();
// proxy.name
// // TypeError: Cannot perform 'get' on a proxy that has been revoked


// Reflect.get(target, name, receiver)


// let exam = {
//   name: "Tom",
//   age: 24,
//   get info(){
//     return this.name + this.age;
//   }
// }
// Reflect.get(exam, 'name'); // "Tom"
//
// // 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
// let receiver = {
//   name: "Jerry",
//   age: 20
// }
// Reflect.get(exam, 'info', receiver); // Jerry20
//
// // 当 name 为不存在于 target 对象的属性时，返回 undefined
// Reflect.get(exam, 'birth'); // undefined
//
// // 当 target 不是对象时，会报错
// Reflect.get(1, 'name'); // TypeError


// Reflect.set(target, name, value, receiver)


// let exam = {
//   name: "Tom",
//   age: 24,
//   set info(value){
//     return this.age = value;
//   }
// }
// exam.age; // 24
// Reflect.set(exam, 'age', 25); // true
// exam.age; // 25
//
// // value 为空时会将 name 属性清除
// Reflect.set(exam, 'age', ); // true
// exam.age; // undefined
//
// // 当 target 对象中存在 name 属性 setter 方法时，setter 方法中的 this 会绑定 // receiver , 所以修改的实际上是 receiver 的属性,
// let receiver = {
//   age: 18
// }
// Reflect.set(exam, 'info', 1, receiver); // true
// receiver.age; // 1
//
// let receiver1 = {
//   name: 'oppps'
// }
// Reflect.set(exam, 'info', 1, receiver1);
// receiver1.age; // 1


// Reflect.has(obj, name)


// let exam = { name: "Tom", age: 24 } ;
// console.log(Reflect.has(exam, 'name')); // true


// Reflect.deleteProperty(obj, property)


// let exam = {
//   name: "Tom",
//   age: 24
// }
// Reflect.deleteProperty(exam , 'name'); // true
// exam // {age: 24}
// // property 不存在时，也会返回 true
// Reflect.deleteProperty(exam , 'name'); // true

// Reflect.construct(obj, args)

// function exam(name){
//   this.name = name;
// }
// Reflect.construct(exam, ['Tom']); // exam {name: "Tom"}


// Reflect.getPrototypeOf(obj)


// class Exam{}
// let obj = new Exam()
// Reflect.getPrototypeOf(obj) === Exam.prototype // true


// Reflect.setPrototypeOf(obj, newProto)


// let obj ={}
// Reflect.setPrototypeOf(obj, Array.prototype); // true


// Reflect.apply(func, thisArg, args)

// Reflect.apply(Math.max, Math, [1, 3, 5, 3, 1]); // 5


// Reflect.apply(func, thisArg, args)


// let myDate= {}
// Reflect.defineProperty(MyDate, 'now', {
//   value: () => Date.now()
// }); // true
//
// const student = {};
// Reflect.defineProperty(student, "name", {value: "Mike"}); // true
// student.name; // "Mike"


// Reflect.getOwnPropertyDescriptor(target, propertyKey)

// var exam = {}
// Reflect.defineProperty(exam, 'name', {
//   value: true,
//   enumerable: false,
// })
// Reflect.getOwnPropertyDescriptor(exam, 'name')
// // { configurable: false, enumerable: false, value: true, writable:
// // false}
//
//
// // propertyKey 属性在 target 对象中不存在时，返回 undefined
// Reflect.getOwnPropertyDescriptor(exam, 'age') // undefined


// Reflect.isExtensible(target)


// let exam = {}
// Reflect.isExtensible(exam) // true


// Reflect.preventExtensions(target)


// let exam = {}
// Reflect.preventExtensions(exam) // true


// Reflect.ownKeys(target)


// var exam = {
//   name: 1,
//   [Symbol.for('age')]: 4
// }
// Reflect.ownKeys(exam) // ["name", Symbol(age)]


// let exam = {
//   name: "Tom",
//   age: 24
// }
// let handler = {
//   get: function(target, key){
//     console.log("getting "+key);
//     return Reflect.get(target,key);
//   },
//   set: function(target, key, value){
//     console.log("setting "+key+" to "+value)
//     Reflect.set(target, key, value);
//   }
// }
// let proxy = new Proxy(exam, handler)
// proxy.name = "Jerry"
// proxy.name
// // setting name to Jerry
// // getting name
// // "Jerry"


// 定义 Set 集合
const queuedObservers = new Set();
// 把观察者函数都放入 Set 集合中
const observe = fn => queuedObservers.add(fn);
// observable 返回原始对象的代理，拦截赋值操作
const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
  // 获取对象的赋值操作
  const result = Reflect.set(target, key, value, receiver);
  // 执行所有观察者
  queuedObservers.forEach(observer => observer());
  // 执行赋值操作
  return result;
}
