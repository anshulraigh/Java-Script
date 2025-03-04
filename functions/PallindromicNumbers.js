function isPalindrome(num) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    return num === reversed;
}
console.log(isPalindrome(121)); 
console.log(isPalindrome(123));