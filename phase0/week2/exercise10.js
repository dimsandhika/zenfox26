// Logic Challenge - Bandingkan Angka
var angkaBaru = true;

function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2) {
        angkaBaru =  true;
    } else if (angka1 > angka2) {
        angkaBaru = false;
    } else {
        angkaBaru = -1;
    }
    return angkaBaru
}
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false