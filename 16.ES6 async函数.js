// async function name([param[, param[, ... param]]]) { statements }


// async function helloAsync(){
//   return "helloAsync";
// }
//
// console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
//
// helloAsync().then(v=>{
//   console.log(v);         // helloAsync
// })


// function testAwait(){
//   return new Promise((resolve) => {
//     setTimeout(function(){
//       console.log("testAwait");
//       resolve();
//     }, 1000);
//   });
// }
//
// async function helloAsync(){
//   await testAwait();
//   console.log("helloAsync");
// }
// helloAsync();
// // testAwait
// // helloAsync


// [return_value] = await expression;


// function testAwait (x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }
//
// async function helloAsync() {
//   var x = await testAwait ("hello world");
//   console.log(x);
// }
// helloAsync ();
// // hello world


function testAwait(){
  console.log("testAwait");
}
async function helloAsync(){
  await testAwait();
  console.log("helloAsync");
}
helloAsync();
// testAwait
// helloAsync
