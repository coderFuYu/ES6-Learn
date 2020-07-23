// 0.1 + 0.2 === 0.3; // false// 在误差范围内即视为相等
// equal = (Math.abs(0.1 - 0.3 + 0.2) < Number.EPSILON); // true


// console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true
// console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1);     // false
// console.log(Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2); // false


// Number.MIN_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2; // false
// Number.MIN_SAFE_INTEGER === Number.MIN_SAFE_INTEGER - 1;     // false
// Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true


// Number.isFinite()


// console.log( Number.isFinite(1));   // true
// console.log( Number.isFinite(0.1)); // true
//
// // NaN 不是有限的
// console.log( Number.isFinite(NaN)); // false
//
// console.log( Number.isFinite(Infinity));  // false
// console.log( Number.isFinite(-Infinity)); // false
//
// // Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
// console.log( Number.isFinite('foo')); // false
// console.log( Number.isFinite('15'));  // false
// console.log( Number.isFinite(true));  // false
// Number.isNaN()
// // 用于检查一个值是否为 NaN 。
// console.log(Number.isNaN(NaN));      // true
// console.log(Number.isNaN('true'/0)); // true
//
// // 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
// // 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
// Number.isNaN("NaN");      // false
// Number.isNaN(undefined);  // false
// Number.isNaN({});         // false
// Number.isNaN("true");     // false


// Number.parseInt()


// // 不指定进制时默认为 10 进制
// Number.parseInt('12.34'); // 12
// Number.parseInt(12.34);   // 12
//
// // 指定进制
// Number.parseInt('0011',2); // 3
//
// // 与全局的 parseInt() 函数是同一个函数
// Number.parseInt === parseInt; // true
// Number.parseFloat()
// // 用于把一个字符串解析成浮点数。
// Number.parseFloat('123.45')    // 123.45
// Number.parseFloat('123.45abc') // 123.45
//
// // 无法被解析成浮点数，则返回 NaN
// Number.parseFloat('abc') // NaN
//
// // 与全局的 parseFloat() 方法是同一个方法
// Number.parseFloat === parseFloat // true
// Number.isInteger()
// // 用于判断给定的参数是否为整数。
// Number.isInteger(value)
// Number.isInteger(0); // true
// // JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
// Number.isInteger(1);   // true
// Number.isInteger(1.0); // true
//
// Number.isInteger(1.1);     // false
// Number.isInteger(Math.PI); // false
//
// // NaN 和正负 Infinity 不是整数
// Number.isInteger(NaN);       // false
// Number.isInteger(Infinity);  // false
// Number.isInteger(-Infinity); // false
//
// Number.isInteger("10");  // false
// Number.isInteger(true);  // false
// Number.isInteger(false); // false
// Number.isInteger([1]);   // false
//
// // 数值的精度超过 53 个二进制位时，由于第 54 位及后面的位被丢弃，会产生误判
// Number.isInteger(1.0000000000000001) // true
//
// // 一个数值的绝对值小于 Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨
// // 的最小值，会被自动转为 0，也会产生误判
// Number.isInteger(5E-324); // false
// Number.isInteger(5E-325); // true
// Number.isSafeInteger()
// // 用于判断数值是否在安全范围内。
// Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1); // false
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false


// console.log(1 ** 2); // 1
// // 右结合，从右至左计算
// console.log(2 ** 2 ** 3); // 256
// // **=
// let exam = 2;
// exam **= 2; // 4
// console.log(exam);
