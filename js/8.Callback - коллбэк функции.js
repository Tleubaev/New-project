
function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
first();
second();

// callback function
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log("Я прошел первый урок");
}
learnJS("JavaScript", done);
