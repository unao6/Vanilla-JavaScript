let age = 10;
function make () {
    // TDZ 영역
    //console.log( age );
    let age = 30;

}

make();
console.log( age )