"use strict";

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



// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;       // тут передается Ссылка на объект, а не создается копия
//                         // т.е. модифируя копию, мы модифицируем наш изначальный объект
// // copy.a = 10;

// console.log(obj);
// console.log(copy);

// function copyObj(mainObj) {
//     let newObj = {};
//     for (let key in mainObj) {
//         newObj[key] = mainObj[key];
//     }
//     return newObj;
// }

// const numbers = {
//     a: 5,
//     b: 2,
//     c: {
//         x: 7,
//         y: 1
//     }
// };

// const newNumbers = copyObj(numbers);
// newNumbers.c.x = 99;
// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 16,
//     e: 32
// };

// console.log(Object.assign(numbers, add));   // добавляет объект в объект, сначала куда(numbers), потом что(add)

// const clone = Object.assign({}, add);       // {} - создает пустой объект, в который мы копируем данные из другого
// clone.d = 55;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();      // создаёт копию массива
// newArray[0] = 'z';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'aitube'],
//       blogs = ['instagram', 'tiktok', 'facebook'],
//       internet = ['vk', ...video, ...blogs, 'mail'];    // ... - оператор разворота, развертывает на отдельные элементы
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const stream = [7, 2, 0];
// log(...stream);                         // развернули массив, что бы функция приняла данные

// const array = ['a', 'b'];
// const newArray2 = [...array];           // способ скопировать массив с помощью оператора разворота
// console.log(newArray2);

// const q = {
//     one: 1,
//     two: 2
// };
// const x = {...q};                       // оператор разворота для клонирования объекта
// console.log(x);




// let str = "some";                       // строка
// let strObj = new String(str);           // объект
// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = {
//     health: 100
// };

// // jonh.__proto__ = soldier;                // старый способ установление наследования у объектов
// Object.setPrototypeOf(jonh, soldier);       // правильный способ установление наследования, сначала прототип, потом главный объект

// const tom = Object.create(soldier);         // мы создали объект, который сразу наследуется от другого объекта

// console.log(jonh.armor);        // Джон получил броню
// jonh.sayHello();                // Джон получил голос



// // To String

// // 1) 
// console.log(typeof(String(null)));      // null - теперь string
// console.log(typeof(String(4)));         // String меняет тип объекта на стринг
// // 2)
// console.log(typeof(undefined + ''));    // канкатинация, сложение чего то со строкой, с помощью кавычек

// const num = 5;
// console.log("https://vk.com/catalog/" + num);
// const fontSize = 26 + "px";

// // To Number

// // 1)
// console.log(typeof(Number('5')));
// // 2)
// console.log(typeof(+'5'));          // унарный плюс
// // 3)
// console.log(typeof(parseInt("15px", 10)));      // первое - что нужно перевести в число, второе - десятичная система

// let answer = +prompt("Hello", "");

// // To Boolean

// // 1)
// // 0, '', null, undefined, NaN; = false
// let switcher = null;
// if (switcher) {
//     console.log('Working...');      // не стработает, т.к. null - это false
// }
// // 2)
// console.log(typeof(Boolean('4')));  // вернёт boolean
// // 3)
// console.log(typeof(!!'4'));         // вернёт boolean       



// let x = 5;
// console.log(x++);   // 5
// console.log(++x);   // 6

// console.log([] + false - null + true);      // NaN

// let y = 1;
// let x = y = 2;
// console.log(x);     // 2

// console.log([] + 1 + 2);    // 12, массив превращает в строку 

// alert( "1"[0] );    // 1, первое знак в массиве, идёт по строкам первый знак

// console.log(2 && 1 && null && 0 && undefined);  // null, 
// // И && - запинается на лжи
// // ИЛИ || - запинается на правде

// console.log(!!(1 && 2) === (1 && 2));   // false, т.к. !! - даёт булиновое значение
 
// console.log(null || 2 && 3 || 4);  // 3
// // 2 И 3 - выбирается последнее, так как оба трушные, = 3
// // null || 3 - выбирается 3, т.к. он трушный
// // 3 || 4 - оператор ИЛИ запинается на правде, первая правда была 3

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b);    // false, т.к.  хоть и переменные имеют одинаковую начинку, они не являются равными

// console.log(typeof(+"Infinity"));   // Infinity - но тип данных будет число

// console.log("Ёжик" > "яблоко");     // false, сравниваются первые символы, нужно смотреть через UNI код
// // Ё - имеет цифру 402, я - 449, "я" больше чем "Ё"

// console.log(0 || "" || 2 || undefined || true || false);    // 2




