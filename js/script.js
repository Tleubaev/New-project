"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const salam = +prompt("Салам", "Уалейкум");
// console.log(salam + 5);

// const answers = [];
// answers[0] = prompt("Как ваше имя?", '');
// answers[1] = prompt("Сколько вам лет?", '');
// answers[2] = prompt("Укажите ваш пол?", '');
// console.log(typeof(answers));
// console.log(typeof(null));

// const url = "toys";
// console.log("https://someurl/" + url); // канкатинация, т.к. соединение двух строк
// console.log(`https://someurl/${url}/5`); // интерполяция, 

// const name = "Oralbek";
// alert(`Salam ${name}`);

// console.log(4 + +"6");  // получим 10


// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// ++incr;
// --decr;
// console.log(incr);
// console.log(decr);

// console.log(5%2);

// console.log(4*2 == '8');
// console.log(4*2 === '8');

// const isChecked = true,
//       isClose = false;
// console.log(isChecked && isClose);
// console.log(isChecked || isClose);



// if (0) {
//     console.log("true");
// }

// const a = 50;
// if (a < 49) {
//     console.log('Error');
// } else if (a > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('ok!');
// }

// const b = 50;
// b == 50 ? console.log('true') : console.log('false');



// const c = 50;
// switch(c) {
//     case 49: 
//         console.log('Неверно');
//         break;
//     case 100: 
//         console.log('Неверно');
//         break;
//     case 50: 
//         console.log('Верно');
//         break;
//     default: 
//         console.log('Не найдено');
//         break;
// }



// let z = 50
// while (z <= 55) {
//     console.log(z);
//     z++;
// }

// let x = 50
// do {
//     console.log(x);
//     x++;
// }
// while (x <= 55);

// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;   // что бы код пропустил данный шаг
//     }
//     console.log(i);
// }




// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(2, 3));
// console.log(calc(5, 2));
// console.log(calc(7, 1));

// function ret() {
//     let num = 50;
//     return num;
// }
// let anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Oralbek");
// };
// logger();

// const plus = (a, b) => a + b;
// const plus2 = (a, b) => {return (2 + a + b - 5)};
// const plus3 = (a, b) => {
//     console.log(1);
//     return (a + b);
// };



// const str = "test";
// console.log(str.length);    // это свойство, оно пишется без скобочек
// console.log(str[2]);
// console.log(str.toUpperCase()); // это функция, она пишется со скобочками
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));    // покажет нумерацию, с которой начинается слово
// console.log(fruit.indexOf("q"));    // покажет -1, т.к нет такого символа

// const logg = "Hello world";
// console.log(logg.slice(6, 11));     // вырежет кусок строки
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));  // тоже самое что и слайс

// console.log(logg.substr(6, 3));     // вырезаем кусок, первое число с откуда начинать, второе сколько вырезать

// const num = 12.2;
// console.log(Math.round(num));       // округляет число до ближайшего целого

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


