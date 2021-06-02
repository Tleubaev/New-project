"use strick";
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
