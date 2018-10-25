// Logic Challenge - Mencari Modus
function cariModus(arr) {
    var modus = 0;
    var nilaiMuncul = 0;
    var penampung = 0;
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j] && arr[i] !== arr[j]) {
          modus = arr[i]
          nilaiMuncul++
            penampung = penampung + nilaiMuncul
        } else if (nilaiMuncul > modus) {
          modus - 1
        } else if (arr.length === 0) {
          modus - 1
    }
      }
    }
    return modus
  }
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1