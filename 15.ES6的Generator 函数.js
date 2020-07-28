// function* func(){
//   console.log("one");
//   yield '1';
//   console.log("two");
//   yield '2';
//   console.log("three");
//   return '3';
// }


// f.next();
// // one
// // {value: "1", done: false}
//
// f.next();
// // two
// // {value: "2", done: false}
//
// f.next();
// // three
// // {value: "3", done: true}
//
// f.next();
// // {value: undefined, done: true}


// function* sendParameter(){
//   console.log("strat");
//   var x = yield '2';
//   console.log("one:" + x);
//   var y = yield '3';
//   console.log("two:" + y);
//   console.log("total:" + (x + y));
// }


// var sendp1 = sendParameter();
// sendp1.next();
// // strat
// // {value: "2", done: false}
// sendp1.next();
// // one:undefined
// // {value: "3", done: false}
// sendp1.next();
// // two:undefined
// // total:NaN
// // {value: undefined, done: true}
// next传参
// var sendp2 = sendParameter();
// sendp2.next(10);
// // strat
// // {value: "2", done: false}
// sendp2.next(20);
// // one:20
// // {value: "3", done: false}
// sendp2.next(30);
// // two:30
// // total:50
// // {value: undefined, done: true}


// function* foo(){
//   yield 1;
//   yield 2;
//   yield 3;
// }
// var f = foo();
// f.next();
// // {value: 1, done: false}
// f.return("foo");
// // {value: "foo", done: true}
// f.next();
// // {value: undefined, done: true}
// throw 方法
// throw 方法可以再 Generator 函数体外面抛出异常，再函数体内部捕获。
// var g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log('catch inner', e);
//   }
// };
//
// var i = g();
// i.next();
//
// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('catch outside', e);
// }
// // catch inner a
// // catch outside b


// function* callee() {
//   console.log('callee: ' + (yield));
// }
// function* caller() {
//   while (true) {
//     yield* callee();
//   }
// }
// const callerObj = caller();
// callerObj.next();
// // {value: undefined, done: false}
// callerObj.next("a");
// // callee: a
// // {value: undefined, done: false}
// callerObj.next("b");
// // callee: b
// // {value: undefined, done: false}
//
// // 等同于
// function* caller() {
//   while (true) {
//     for (var value of callee) {
//       yield value;
//     }
//   }
// }


function* objectEntries(obj) {
  const propKeys = Reflect.ownKeys(obj);
  for (const propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

const jane = { first: 'Jane', last: 'Doe' };
for (const [key,value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe
