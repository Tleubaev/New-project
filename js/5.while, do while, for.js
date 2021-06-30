
let z = 50
while (z <= 55) {
    console.log(z);
    z++;
}

let x = 50
do {
    console.log(x);
    x++;
}
while (x <= 55);

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        // break;
        continue;   // что бы код пропустил данный шаг
    }
    console.log(i);
}


