// Logic Challenge - Palindrome
function palindrome(kata) {
    var kataBaru = '';

    for (var i = kata.length - 1; i >= 0; i--) {
        kataBaru += kata[i]
    }
    if (kataBaru === kata) {
        return true
    } else {
        return false
    }
    return kataBaru
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false