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



// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();

// // callback function
// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log("Я прошел первый урок");
// }
// learnJS("JavaScript", done);



// const options = {
//     name: "oralbek",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// // console.log(options.name);
// // console.log(options['colors']['border']);
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // delete options.name;
// // console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);                      // подсчитать количество объектов
// console.log(Object.keys(options).length);  // количество объектов, правильный способ




// const arr = [1, 2, 4, 8, 16];

// console.log(arr.length);        // берет индекс последнего элемента и добавляет +1

// arr.pop();              // удаляет последний элемент в массиве
// arr.push(-16);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {      // перебор массива
//     console.log(arr[i]);
// }

// for (let value of arr) {        // перебор массива другой способ
//     console.log(value);
// }

// // forEach пробегает по каждому элементу, тоже перебор массива, самый правильный
// // item - выступает в качестве этого элемента, i - номер по порядку, arr - название массива к которому обращаемся
// arr.forEach(function(item, i, arr) {        
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("Qwerty", "");
// const products = str.split(", ");       // разъединяет строки с разделителем
// products.sort();
// console.log(products.join("; "));      // соединяет(склеивает строку) через разделитель

// const arr1 = [1, 28, 14, 8, 16];
// console.log(arr1.sort(compareNum));

// function compareNum(a, b) {
//     return a - b;
// }
