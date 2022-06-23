'use strict'
//관계연산자 > < >= <= == !=
// === 형(type)까지 같다
// !== 자료형까지 비교해서 다르다

//결과: true, false
let a = 10, b = 30, c = 40, result = null, num1 = "10";

result = a > b ; 
console.log('a>b: %s', result);

result = a < b ;
console.log('a<b: %s', result);

result = a == b ;
console.log('a==b: %s', result);

result = a >= b ;
console.log('a>=b: %s', result);

result = a != b;
console.log('a!=b: %s', result);

result = a == num1;
console.log('a == num1: %s', result);

result = a === num1;
console.log('a === num1: %s', result);

result = a !== num1;
console.log('a !== num1: %s', result);