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

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false   
};

const lastFilms = prompt("Один из последних просмотренных фильмов?", ''),
      fimlsScore = +prompt("На сколько оцените его?", ''),
      lastFilms2 = prompt("Один из последних просмотренных фильмов?", ''),
      fimlsScore2 = +prompt("На сколько оцените его?", '');

personalMovieDB.movies[lastFilms] = fimlsScore;
personalMovieDB.movies[lastFilms2] = fimlsScore2;

console.log(personalMovieDB);