// const p1 = new Promise(function(resolve,reject){
//   resolve('success1');
//   resolve('success2');
// });
// const p2 = new Promise(function(resolve,reject){
//   resolve('success3');
//   reject('reject');
// });
// p1.then(function(value){
//   console.log(value); // success1
// });
// p2.then(function(value){
//   console.log(value); // success3
// });


// const p = new Promise(function(resolve,reject){
//   resolve('success');
// });
//
// p.then(function(value){
//   console.log(value);
// });
//
// console.log('first');
// // first
// // success


// .then

// const p = new Promise(function(resolve,reject){
//   resolve(1);
// }).then(function(value){ // 第一个then // 1
//   console.log(value);
//   return value * 2;
// }).then(function(value){ // 第二个then // 2
//   console.log(value);
// }).then(function(value){ // 第三个then // undefined
//   console.log(value);
//   return Promise.resolve('resolve');
// }).then(function(value){ // 第四个then // resolve
//   console.log(value);
//   return Promise.reject('reject');
// }).then(function(value){ // 第五个then //reject:reject
//   console.log('resolve:' + value);
// }, function(err) {
//   console.log('reject:' + err);
// });


const p1 = new Promise(function(resolve,reject){
  resolve(1);
}).then(function(result) {
  p2(result).then(newResult => p3(newResult));
}).then(() => p4());
