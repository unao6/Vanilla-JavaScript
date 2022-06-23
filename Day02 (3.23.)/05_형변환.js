'use strict'
//Number, parseInt, String(문자), toString, toFIxed
let a = 10;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

let b = '100';
console.log(b, typeof b);
b = Number(b);
console.log(b, typeof b);

let c1 = '200';
console.log(c1, typeof c1);
c1=parseInt(c1);
console.log(c1, typeof c1);

let c2 = '50px';
let c3 = '10살';
c2 = parseInt(c2); //문자에 해당하는 부분은 날려버리고 숫자만 가져와서 변환시켜줌
c3 = parseInt(c3);
console.log(c2, typeof c2);
console.log(c3, typeof c3);

let num1 = 10;
let d1 = num1.toString() //진법을 처리해줄 수 있음.
console.log(d1, typeof d1);
d1 = num1.toString(2); //2진법
console.log(d1, typeof d1);
d1 = num1.toString(8); //8진법
console.log(d1, typeof d1); 

let num2 = 123.12329491;
let d2 = num2.toFixed(3);
console.log(d2, typeof d2);