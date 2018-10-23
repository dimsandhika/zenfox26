// Mengakses Nilai Dalam Array
function balikString(str) {

    var kataBaru = '';

    for (var i = str.length-1; i >= 0; i--) {
        kataBaru+=str[i]
    }
    return kataBaru
}
console.log(balikString('hello world!'))