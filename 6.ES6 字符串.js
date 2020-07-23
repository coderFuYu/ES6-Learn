// let string = "apple,banana,orange";
// string.includes("banana");     // true
// string.startsWith("apple");    // true
// string.endsWith("apple");      // false
// string.startsWith("banana",6)  // true


// console.log("Hello,".repeat(2));  // "Hello,Hello,"


// console.log("h".padStart(5,"o"));  // "ooooh"
// console.log("h".padEnd(5,"o"));    // "hoooo"
// console.log("h".padStart(5));      // "    h"

// console.log("hello".padStart(5,"A"));  // "hello"
// console.log("hello".padEnd(10,",world!"));  // "hello,worl"
// console.log("123".padStart(10,"0"));  // "0000000123"


// let string = `Hello'\n'world`;
// console.log(string);
// // "Hello'
// // 'world"


// let string1 =  `Hey,
// can you stop angry now?`;
// console.log(string1);
// // Hey,
// // can you stop angry now?


// let name = "Mike";
// let age = 27;
// let info = `My Name is ${name},I am ${age+1} years old next year.`
// console.log(info);
// // My Name is Mike,I am 28 years old next year.


// function f(){
//   return "have fun!";
// }
// let string2= `Game start,${f()}`;
// console.log(string2);  // Game start,have fun!


// innerHtml = `<ul>
//   <li>menu</li>
//   <li>mine</li>
// </ul>
// `;
// console.log(innerHtml);
// // 输出
// // <ul>
// // <li>menu</li>
// // <li>mine</li>
// // </ul>


// alert`Hello world!`; // 等价于 alert('Hello world!');


// function f(stringArr,...values){
//   let result = "";
//   for(let i=0;i<stringArr.length;i++){
//     result += stringArr[i];
//     if(values[i]){
//       result += values[i];
//     }
//   }
//   return result;
// }
// let name = 'Mike';
// let age = 27;
// f`My Name is ${name},I am ${age+1} years old next year.`;
// // "My Name is Mike,I am 28 years old next year."
//
// f`My Name is ${name},I am ${age+1} years old next year.`;
// // 等价于
// f(['My Name is',',I am ',' years old next year.'],'Mike',28);


// function f(stringArr,...values){
//   let result = "";
//   for(let i=0;i<stringArr.length;i++){
//     result += stringArr[i];
//     if(values[i]){
//       result += String(values[i]).replace(/&/g, "&amp;")
//           .replace(/</g, "&lt;")
//           .replace(/>/g, "&gt;");
//     }
//   }
//   return result;
// }
// name = '<Amy&MIke>';
// f`<p>Hi, ${name}.I would like send you some message.</p>`;
// // <p>Hi, &lt;Amy&amp;MIke&gt;.I would like send you some message.</p>


// i18n`Hello ${name}, you are visitor number ${visitorNumber}.`;
// // 你好**，你是第**位访问者


