// Logic Challenge - Tentukan Deret Aritmatika
function tentukanDeretAritmatika(arr) {
    var selisih = arr[1] - arr[0]
    var hasil = true;

    for (var i = 0; i < arr.length-1; i++) {

        var selisihBaru = arr[i + 1] - arr[i]
        if (selisih !== selisihBaru) {
            hasil = false;
        }
    }
    return hasil
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false