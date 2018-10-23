// Logic Challenge - Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
        var kalimatSplit = kalimat.split(' ');
        var hitungKalimat = 0;

        for (var i = 0; i < kalimatSplit.length; i++) {
                hitungKalimat += 1
        }
        return hitungKalimat
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
