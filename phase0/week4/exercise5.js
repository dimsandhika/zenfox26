// Logic Challenge - Ubah Huruf
function ubahHuruf(kata) {
var kamusKata = kata.split('')
var kamusBahasa = 'abcdefghijklmnopqrstuvwxyz'
var kamusBahasaBaru = kamusBahasa.split('')
var bahasa = '';


for (var i = 0; i < kamusKata.length; i++) {
    for (var j = 0; j < kamusBahasaBaru.length; j++) {
        if (kamusKata[i] === kamusBahasaBaru[j]) {
            
        }
    }
}
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu