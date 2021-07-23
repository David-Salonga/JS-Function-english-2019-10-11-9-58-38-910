function palindrome(str){
    return str == str.split("").reverse().join("")

  }
  console.log(palindrome('hello')); // should return false
  console.log(palindrome('abcba')); // should return true