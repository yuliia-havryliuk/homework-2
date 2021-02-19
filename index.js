'use strict';

// Класна робота

// 3.Емуляція гри в кубики, юзер клацає на конфірм та отримує
// 2 результати (кубики стандартні 1-6 значення на них.)
// Якщо випадає 2 шестірки , вивести додаткове повідомлення що це - джекпот!

// function task03() {
  let min = 1;
  let max = 6;
  let randomNum1 = Math.floor(Math.random()*(max-min+1))+min;
  let randomNum2 = Math.floor(Math.random()*(max-min+1))+min;
    alert(`Ваші числа ${randomNum1} та ${randomNum2}`);

    if (randomNum1===6 && randomNum2===6){
        alert('YOU WON JACKPOT!')
    }
// }
// 4.Cтворіть програму яка запитує у юзера 2 значення та
// виводить рандомно число між цими 2 значеннями.
// function task04() {
    let userNum1 = prompt('Введіть перше значення:')
    let userNum2 = prompt('Введіть друге значення:')
    let userRandomNum = Math.floor(Math.random()*(+userNum2 - +userNum1 +1))+ +userNum1;
    alert(userRandomNum);
// }

// 5.Cтворити масив у якому буде 3 юзера описані як обєкти з
// такими полями - age, name, hobby (теж повинно бути
// масивом )
// function task05() {
    let userArr = {
        users:[
            {name:'Julie', age:21, hobby:'painting'},
            {name:'Mark', age:41, hobby:'skiing'},
            {name:'John', age:11, hobby:'cars'},
        ]
    };
    console.log(userArr)
    alert('Масив в консолі!')
// }

// Домашня робота
// 1.Написати конвертер валют - пишете скільки у вас є
// гривень і які очікуємо можливі конвертації - у долар, євро,
// нафту(brent), золото. Додатково зробити перевірку чи не
// обманює вас юзер і перевіряти чи не прийшов вам null or
// undefined.

let userMoney = prompt('How much money do You have(in UAH)?')

let convertDollar = userMoney * 0.0358;
// alert(`You can receive: $${convertDollar.toFixed(2)}.`)

let convertEuro = userMoney * 0.0297;
// alert(`You can receive: €${convertEuro.toFixed(2)}.`)

let brentConvert = userMoney / (64.63*27.95);
// alert(`You can buy: ${brentConvert.toFixed(2)} brent features.`)

let goldConvert = userMoney /(47.62*33.7);
// alert(`You can receive ${goldConvert.toFixed(4)} gram of gold.`)

if (isNaN(userMoney)) {
    alert(`Write a number!`)
} else if (Number(userMoney)){
    alert(`You can receive: $${convertDollar.toFixed(2)}.`)
    alert(`You can receive: €${convertEuro.toFixed(2)}.`)
    alert(`You can buy: ${brentConvert.toFixed(2)} brent features.`)
    alert(`You can receive ${goldConvert.toFixed(4)} gram of gold.`)
}

// 2.Спитатись у юзера суму замовлення і вивести результат з
// урахуванням знижки : до 500 гривень знижка -1 %, від 500
// до 1000 - 5%, більше 1000 - 10% та подарунковий
// сертифікат на 200 гривень у подарунок!.

let userOrderSum = +prompt('Write the summary of Your order:')
let userOrderLess500 = userOrderSum * 0.01;
let userOrderLess1000 = userOrderSum * 0.05;
let userOrderMore1000 = userOrderSum * 0.1;
if (userOrderSum < 500){
    alert(`You receive 1% discount! It's ${userOrderLess500.toFixed(2)} UAH !`)
} else if(userOrderSum >500 && userOrderSum<1000){
    alert(`You receive 5% discount! It's ${userOrderLess1000.toFixed(2)} UAH !`)
} else if (userOrderSum>=1000){
    alert(`You receive 10% discount! It's ${userOrderMore1000.toFixed(2)} UAH! And also You receive 200 UAH certificate as a gift!`)
}


// 3.Створити тест на знання будь-чого, юзер має відповісти на
// 5 питань, вірна відповідь - 1 бал, якщо юзер відповість
// правильно на всі 5 запитань - додатково додати 1
// бонусний бал. ☼ ★

alert("Let's play a game! Answer all five questions and receive a gift!")
let userQuestion1 = prompt('First question: Зуб слона может весить до девяти килограмм?')
let userQuestion2 = prompt('Second question: Размером с какой мяч глаз гигантского кальмара?')
let userQuestion3 = +prompt('Third question: Сколько у лебедя перьев на теле?')
let userQuestion4 = prompt('Forth question: Крысы могут смеяться если их пощекотать?')
let userQuestion5 = +prompt('Fifth question: На сколько часов морские котики могут задерживать дыхание?')
let firstScore;
if (userQuestion1==='Да'){
    firstScore=1;
} else{
    firstScore=0;
}
let secondScore;
if (userQuestion2==='баскетбольный'){
    secondScore=1;
} else{
    secondScore=0;
}
let thirdScore;
if(userQuestion3==='2500'){
    thirdScore=1;
} else {
    thirdScore=0;
}
let forthScore;
if(userQuestion4==='Да'){
    forthScore=1;
} else {
    forthScore=0;
}

let fifthScore;
if(userQuestion5==='2'){
    fifthScore=1;
} else {
    fifthScore=0;
}

let Score=firstScore+secondScore+thirdScore+forthScore+fifthScore;

if (Score===5) {
    alert(`You receive ${+Score + 1} ★★★★★★!`);
}else if(Score<5){
    alert(`You receive ${+Score} ★!`);
}



// 4.Запитатись у користувача 3 значне число та сказати чи є у
// ньому однакові цифри



// 5.Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та
// вивести що буде при нажиманні цифри разом з шифтом.

// function task5() {
    let userSymbol=prompt('Натисніть на клавішу від 1 до =')
    if(+userSymbol===1){
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
// }

let userNumber = (prompt('Введіть трьохзначне число: '))

let arr = userNumber.split('',3);
console.log(arr)

if (arr[0]===arr[1] || arr[0]===arr[2] || arr[1]===arr[2]){
    alert('Знайдено співпадіння чисел!')
}  else{
    alert('Не знайдено співпадіння чисел')
}
