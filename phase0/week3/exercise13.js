// Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
    var posO = 0;
    var posX = 0;
    var selisihOx = arr.length

    // untuk cari o ke x
    for (var i = 0; i < arr.length; i++) {
        // cari pos o
        if (arr[i] === 'o') {
            posO = i;
            // untuk posisi x
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === 'x') {
                    posX = j;
                    var currentDistance = Math.abs(posX - posO)
                    if (selisihOx > currentDistance) {
                        selisihOx = currentDistance
                    }
                }
            }
        }
    }
    if (selisihOx === arr.length) {
        return 0
    }
    return selisihOx
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2