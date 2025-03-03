const n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 1) {
    console.log("Please enter an integer greater than 1.");
} else {
    let num = n;
    console.log(`Prime factors of ${n}:`);

    while (num % 2 === 0) {
        console.log(2);
        num /= 2;
    }

    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            console.log(i);
            num /= i;
        }
    }

    if (num > 1) console.log(num);
}
