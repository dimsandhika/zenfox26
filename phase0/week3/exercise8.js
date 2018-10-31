// Logic Challenge - Pasangan Angka Terbesar
function pasanganTerbesar(num) {
    var strnum = String(num);
    var digitKiri = 0
    var digitKanan = 0
  
    for (var j = 0; j < strnum.length; j++) {
      if (strnum[j] > digitKiri) {
        digitKiri = strnum[j] 
        digitKanan = strnum[j + 1]
      }
    }
    return Number(digitKiri + digitKanan)
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99