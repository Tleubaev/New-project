"use strick";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: () => {            // стрелочная функция
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ''),
                  b = +prompt("На сколько оцените его?", '');
        
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('Good');
                } else {
                    console.log("Error");
                    i--;
                }
        }
    },
    detectPersonalLevel: function() {       
        if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count >= 30){
                console.log('Вы киноман!');
            } else {
                console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const a = prompt(`Ваш любимый фильм под номером ${i}`);
            if (a === '' || a == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = a;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {           // стрелочная коллбэк функция
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }
};



