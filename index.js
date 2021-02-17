'use strict';

// Класна робота

function task03() {
  let min = 1;
  let max = 6;
  let randomNum1 = Math.floor(Math.random()*(max-min+1))+min;
  let randomNum2 = Math.floor(Math.random()*(max-min+1))+min;
    console.log(`Ваші числа ${randomNum1} та ${randomNum2}`);

    if (randomNum1===6 && randomNum2===6){
        alert('YOU WON JACKPOT!')
    }
}

function task04() {
    let userNum1 = prompt('Введіть перше значення:')
    let userNum2 = prompt('Введіть друге значення:')
    let userRandomNum = Math.floor(Math.random()*(+userNum2 - +userNum1 +1))+ +userNum1;
    alert(userRandomNum);
}

function task05() {
    let userArr = {
        users:[
            {name:'Julie', age:21, hobby:'painting'},
            {name:'Mark', age:41, hobby:'skiing'},
            {name:'John', age:11, hobby:'cars'},
        ]
    }
    console.log(userArr)
}

// Домашня робота

function task5() {
    let userSymbol=prompt('Натисніть на клавішу від 1 до =')
    if(userSymbol===1){
        alert('!')
    } else if(+userSymbol===2){
        alert('@')
    } else if(+userSymbol===3){
        alert('#')
    } else if(+userSymbol===4){
        alert('$')
    } else if(+userSymbol===5){
        alert('%')
    }else if(+userSymbol===6){
        alert('^')
    }else if(+userSymbol===7){
        alert('&')
    }else if(+userSymbol===8){
        alert('*')
    }else if(+userSymbol===9){
        alert('(')
    }else if(+userSymbol===0){
        alert(')')
    }else if(userSymbol==='-'){
        alert('_')
    }else if(userSymbol==='='){
        alert('+')
    }else{
        alert('Упс! не та клавіша! Натисніть на клавішу від 1 до =')
    }
}