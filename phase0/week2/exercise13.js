// Logic Challenge - X dan O
function xo(str) {
    var x = '';
    var o = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x++
        } else if (str[i] === 'o') {
            o++
        }
    }
    return x === o
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true