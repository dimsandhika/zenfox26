// Logic Challenge - Number Palindrome
function angkaPalindrome(num) {

    for (var i = 0; i < num; i++) {
      num++
      var strnum = String(num);
      var result = '';
  
      for (var j = strnum.length - 1; j >= 0; j--) {
        result = result + strnum[j]
      }
        if (result == strnum) {
          return num
      }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001