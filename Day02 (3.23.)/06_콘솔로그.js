'use strict'

const name='김철수';
const age=20;
let addr='서울';
// 출력: 이름은 김철수이고 나이는 20살이며 집은 서울입니다.
//서로 다른 성격을 연결할때는 +
//console.log(이름은 '+name+'이고 나이는 '+age+'살이며 집은 '+addr+'입니다.);

//%s - 문자열, %d 10진수
console.log('이름은 %s이고 나이는 $d살이며 집은 %s입니다', name, age, addr);

//이스케이프
//문자열나열 "출력" '홍길동' 과목\
const msg = '안녕하세요 \'저는\' \"홍길동\"이고 집은 서울이며 나이는 20살 입니다.';
console.log(msg);