'use strict'
// and &&     or ||    not !

let a=10, b=20, c=30, isplay=false, result=null;

result= (a>b) && (a>c);
console.log('(a>b) && (a>c) : %s', result);

result= (a<b) && (a<c);
console.log('(a<b) && (a<c) : %s', result);

result = (a>b) || (a<c);
console.log('(a>b) || (a<c); : %s', result);

// !true = false, !false = true
isplay = !isplay
console.log(isplay);