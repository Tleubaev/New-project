
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(2, 3));
console.log(calc(5, 2));
console.log(calc(7, 1));

function ret() {
    let num = 50;
    return num;
}
let anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Oralbek");
};
logger();

const plus = (a, b) => a + b;               // стрелочная функция
const plus2 = (a, b) => {return (2 + a + b - 5)};
const plus3 = (a, b) => {
    console.log(1);
    return (a + b);
};

