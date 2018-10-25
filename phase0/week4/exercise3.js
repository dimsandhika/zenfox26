// Logic Challenge - Mencari Median
function cariMedian(arr) {
    var tampung = 0;
    var hasil = 0;
    var panjang = arr.length

    for (var i = 0; i < arr.length; i++) {
        tampung+=arr[i]
        hasil = Math.abs(tampung / arr.length)
        
    }
    return hasil
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5