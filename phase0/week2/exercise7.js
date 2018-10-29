// 1. Menyusun Barisan Bintang
var rows1 = 1;
var limit = 5;
while (rows1 <= limit) { // Looping menggunakan While
    console.log('*');
    rows1++
}

for (var rows1 = 1; rows1 <= 5; rows1++) { // Looping menggunakan For
    console.log('*');
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
var stars = '';
for (var i = 0; i < rows2; i++) {
    for (var j = 0; j < rows2; j++) {
      stars = stars + '*'
    }
    stars = stars + '\n'
}
console.log(stars)

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
var bintang = '';

for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
      bintang+='*'
    }
    bintang+='\n'
  }
  console.log(bintang)