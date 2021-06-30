"use strick";

let obj = {
    number: 5,
    sayNumber: function() {
            // function say() {     // функция 
            say = () => {           // стрелочная функция
                console.log(this);   
            }
        say();
    }
};
obj.sayNumber();


let names = ["Oralbek", "Ashat", "Kuanysh", "Dias", "Nariman"];

let shortNames = names.filter((name1) => {
    return name1.length < 6;
});
console.log(shortNames);


let answers = ['oRalbeK', 'ASHAT', 'KuanYSH', 'dias', 'nariMAN'];

answers = answers.map((item) => item.toLowerCase().ca);
console.log(answers);


function fetchData(data = 'abc', count = 0) {               // установили данные по умолчанию
    console.log(`Данные: ${data} в количестве ${count}`);
}
fetchData();

function max(a, b, ...numbers) {        // ... - рест оператор, собрал все цифры в массив
    console.log(numbers);
}
max(1, 2, 3, 4, 5, 6);


const arr1 = [1, 5, 54],
      arr2 = [7, 23, 99];

const res = Math.max(33, ...arr1, 76, ...arr2);     // развернул массив
console.log(res);

const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};
// const res2 = Object.assign({}, user, admin);
const res2 = {...user, ...admin, avatar};
console.log(res2);


const x = 25, 
      y = 10;
console.log(x, y);

const coords = {x, y,
    calcSq() {
        console.log(this.x * this.y);
    }
};
coords.calcSq();


const user = {
    name: {
        first: 'Sam',
        second: 'Smit'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user;      // деструктуризация
console.log(first, rights);


function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'
    // данные по умолчанию
} = {}) {   // тут мы говорим что объект по умолчанию пустой
    console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({
    port: 100,
    host: 'abc'
});
connect();



const numbers = [[1, 3], [5, 7, 9]];    

const [[, b], [, c]] = numbers;      // деструктуризация массива
console.log(b, c);



const country = {
    name: 'Kazakstan',
    population: 19000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
};

const {name, population, gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;
console.log(population, maleUnder18, femaleAdult);


