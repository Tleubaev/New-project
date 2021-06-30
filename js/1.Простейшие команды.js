"use strick";

alert("Hello");

const result = confirm("Are you here?");
console.log(result);

const salam = +prompt("Салам", "Уалейкум");
console.log(salam + 5);

const answers = [];
answers[0] = prompt("Как ваше имя?", '');
answers[1] = prompt("Сколько вам лет?", '');
answers[2] = prompt("Укажите ваш пол?", '');
console.log(typeof(answers));
console.log(typeof(null));

const url = "toys";
console.log("https://someurl/" + url); // канкатинация, т.к. соединение двух строк
console.log(`https://someurl/${url}/5`); // интерполяция, 

const name = "Oralbek";
alert(`Salam ${name}`);

console.log(4 + +"6");  // получим 10
