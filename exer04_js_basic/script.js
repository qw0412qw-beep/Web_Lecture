/*
let funcNoname = function () {
    alert('함수_01');
    alert('함수_02');    
}

funcNoname();

let funcNoname = function () {
    alert('함수_01');
    alert('함수_02');    
}

alert(typeof(funcNoname) + ' : ' + funcNoname);


function funcName(){
    alert('함수_01');
    alert('함수_02');
};

alert(typeof(funcName) + ' : ' + funcName);


function f(x){
    return x * x;
};

alert(f(3));

let fun = function(){
    alert('함수호출');
};

function callTenTimes(callback_func){

    for(let i=0; i<10; i++){
        callback_func();
    }
}

callTenTimes(fun);

function callTenTimes() {

    for(let i=0; i<10; i++){
        alert('함수호출');
    }
}

callTenTimes();
*/

let person = {
    name : '황현빈',
    eat : function(food){
        alert(this.name + '이 '+ food + '을/를 먹습니다.');
    }
};

person.eat('초밥');

