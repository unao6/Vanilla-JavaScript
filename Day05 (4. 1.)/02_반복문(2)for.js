'use strict'
/* 3의배수 출력
for(let i=0; i<20; i++){
    if(i%3==0){
        console.log(i);
    }
}
*/

for(let i=0; i<20; i=i+2){
    console.log(i);
}

let total=0;
for(let j=0; j<20; j=j+2){
    total +=j;
    console.log(j);
}
console.log('짝수의 총 합은 %d', total);