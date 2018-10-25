// 1. Menyusun Barisan Bintang
var rows1 = 1;
var limit = 5;
while(rows1 <= limit) { // Looping menggunakan While
    console.log('*');
    rows1++
}

for (var rows1 = 1; rows1 <= 5; rows1++) { // Looping menggunakan For
    console.log('*');
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 1;
var limit = 5;
var stars = '';
while (rows2 <= limit) { // Looping menggunakan While
    stars = stars + '*'
    rows2++
}
console.log(stars);

var i = 1;
while(i < limit) {
    console.log(stars)
    i++
}

var stars = '';
for (var rows2 = 1; rows2 <= 5; rows2++) { // Looping menggunakan For
    stars = stars + '*'
}
console.log(stars)

for (var i = 1; i < 5; i++) {
    console.log(stars);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// var stars = ''
var rows3 = 1
var limit = 5
var a = 1
var stars = ''

while(rows3++ <= limit) {
  while(a++ <= limit) {
  stars = stars + '*'
  console.log(stars)
  }
 }
