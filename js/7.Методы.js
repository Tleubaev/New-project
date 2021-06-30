
const str = "test";
console.log(str.length);    // это свойство, оно пишется без скобочек
console.log(str[2]);
console.log(str.toUpperCase()); // это функция, она пишется со скобочками
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));    // покажет нумерацию, с которой начинается слово
console.log(fruit.indexOf("q"));    // покажет -1, т.к нет такого символа

const logg = "Hello world";
console.log(logg.slice(6, 11));     // вырежет кусок строки
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));  // тоже самое что и слайс

console.log(logg.substr(6, 3));     // вырезаем кусок, первое число с откуда начинать, второе сколько вырезать

const num = 12.2;
console.log(Math.round(num));       // округляет число до ближайшего целого

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

