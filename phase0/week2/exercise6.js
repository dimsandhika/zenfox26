// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var i = 2;
var limit = 20;
while (i <= limit) { // akan melakukan looping selama belum mencapai 20
    console.log(i + ' - I love coding');
    i += 2 // penambahan sebanyak 2
}

console.log('LOOPING KEDUA');
var j = 20;
var limit = 2;
while (j >= limit) { // akan melakukan looping selama belum mencapai 2
    console.log(j + ' - I will become fullstack developer');
    j -= 2 // pengurangan sebanyak 2
}


// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var j = 20; j >= 1; j--) {
    console.log(j + ' - I will become fullstack developer');
}


// 3. Angka Ganjil dan Genap
// Problem 1 dan Problem 2
var i = 1;
var limit = 100;
while (i <= limit) { // LOOPING GANJIL - GENAP menggunakan while
    if (i % 2 == 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
    i += 1
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) { // LOOPING GANJIL - GENAP menggunakan For
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

// Problem 3 dan Problem 4
var i = 1;
var limit = 100;
while (i <= limit) { // Looping kelipatan 3 pertambahan 2 menggunakan While
    if (i % 3 == 0) {
        console.log('3 KELIPATAN 3');
    } else {
        console.log('');
    }
    i+=2
}

for (var i = 1; i <= 100; i += 2) {
    if (i % 3 == 0) { // Looping kelipatan 3 pertambahan 2 menggunakan For
        console.log('3 KELIPATAN 3');
    } else {
        console.log('');
    }
}

var i = 1;
var limit = 100;
while (i <= limit) { // Looping kelipatan 6 pertambahan 5 menggunakan While
    if (i % 6 == 0) {
        console.log('6 KELIPATAN 6');
    } else {
        console.log('');
    }
    i+=5
}

for (var i = 1; i <= 100; i += 5) {
    if (i % 6 == 0) { // Looping kelipatan 6 pertambahan 5 menggunakan For
        console.log('6 KELIPATAN 6');
    } else {
        console.log('');
    }
}

var i = 1;
var limit = 100;
while (i <= limit) { // Looping kelipatan 10 pertambahan 9 menggunakan While
    if (i % 10 == 0) {
        console.log('10 KELIPATAN 10');
    } else {
        console.log('');
    }
    i+=9
}

for (var i = 1; i <= 100; i += 9) {
    if (i % 10 == 0) { // Looping kelipatan 10 pertambahan 9 menggunakan For
        console.log('10 KELIPATAN 10');
    } else {
        console.log('');
    }
}



