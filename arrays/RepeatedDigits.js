function findRepeatedDigits() {
    let repeatedNumbers = [];

    for (let i = 10; i <= 99; i++) {
        let tens = Math.floor(i / 10);
        let ones = i % 10;
        if (tens === ones) {
            repeatedNumbers.push(i);
        }
    }

    console.log("Repeated Digit Numbers:", repeatedNumbers);
}

findRepeatedDigits();
