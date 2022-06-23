'use strict'

let a = 10;
a++;
console.log(a);
++a; //a=a+1, a += 1
console.log(a);

/* 
    ++ : +1 증가
    -- : -1 감소

    변수++
    ++변수
    변수--
    --변수

    (앞에 붙어도 되고 뒤에 붙어도 됨)

    :: 전위 연산자 ++(--)변수
    :: 후위 연산자 변수++(--)

*/

// :: 후위 연산자
let num1= 10;
let num2= num1++;   // num1을 num2에 먼저 넘겨주고, 메모리에낳아있는 num1의 값에 +1을 함
console.log(num1, num2);

// :: 전위 연산자
let num3= 10;
let num4= ++num3; // 값을 증가해서 보내고, 자기도 증가함
console.log(num3, num4);