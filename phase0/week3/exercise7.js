// Logic Challenge - Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
        var kalimatBaru = kalimat.split(' ')
        var result = '';
      
        for (var i = 0; i < kalimatBaru.length; i++) {
          result++
        }
        return result
      }

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
