// Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
    for (var i = num; true; num++) {

        var strAngka = String(num)
        var angkaBalik = '';
        for (var j = strAngka.length - 1; j >= 0; j--) {
            angkaBalik += strAngka[j]
            if (strAngka == angkaBalik) {
                return strAngka
            }
        }
    }
    return angkaBalik
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(11)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001