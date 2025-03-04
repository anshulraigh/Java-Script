function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (num) => {
    num = parseInt(num);
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindromeNum = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindromeNum}.`);
        if (isPrime(palindromeNum)) {
            console.log(`${palindromeNum} is also a prime number.`);
        } else {
            console.log(`${palindromeNum} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
    readline.close();
});
