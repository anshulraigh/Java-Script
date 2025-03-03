const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (num) => {
    num = parseInt(num);

    if (isNaN(num) || num < 2) {
        console.log("Enter a valid number greater than or equal to 2.");
    } else {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(`${num} is ${isPrime ? "a Prime Number" : "not a Prime Number"}`);
    }
    readline.close();
});
