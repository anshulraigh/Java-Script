const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter range (start end): ", (input) => {
    let [start, end] = input.split(" ").map(Number);

    if (isNaN(start) || isNaN(end) || start < 2 || start > end) {
        console.log("Enter a valid range with start >= 2 and start <= end.");
    } else {
        console.log(`Prime numbers between ${start} and ${end}:`);
        for (let num = start; num <= end; num++) {
            let isPrime = true;
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) console.log(num);
        }
    }
    readline.close();
});
