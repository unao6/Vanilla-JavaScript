'use strict'

/*
    반복문: 연속적인 작업을 처리할 때,
            동일한 작업을 여러번 반복할때
    1. 몇번 횟수 지정 : for 권장
    2. 무한반복: while 권장
    3. do~while 많이 사용하지는 않는다

    // 1~10까지 반복하고 합
let sum=0;
for(let i=0; i<=10; i++){
    sum=sum+i;
    console.log('총합은 %s', sum);
}
*/
//이런식으로 사용하는 사람도 있음(일반적이지않음)
//무한반복인데, for문으로 무한반복쓰는건 좋은방법 아님
let sum=0;
let i=1;
for( ; i<=10; ){
    sum=sum+i;
    i++;
    console.log('총합은 %s', sum);
}


