//즉시함수 (즉시실행함수)
;(function(){
    const get = (target)=>{
        return document.querySelector(target);
    }
    let $list = get('.list');
    let $item1 = get('.item1');
    let $item2 = get('.item2');
    let $item3 = get('.item3');

    $item1.style.backgroundColor='pink';
    $item2.style.backgroundColor='yellow';
    $item3.style.backgroundColor='skyblue';

})()

//실제로는 위에이렇게함.. $는 경로를 설정해준다는뜼으로 임으로 쓴 기호




// const list= document.querySelector('.list');
// const item1= document.querySelector('.item1');
// const item2= document.querySelector('.item2');
// const item3= document.querySelector('.item3');

// item1.style.backgroundColor='pink';
// item2.style.backgroundColor='yellow';
// item3.style.backgroundColor='skyblue';