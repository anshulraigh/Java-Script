const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number (1, 10, 100, 1000, ...): ", (num) => {
    const placeValue = {
        1: "Unit",
        10: "Ten",
        100: "Hundred",
        1000: "Thousand",
        10000: "Ten Thousand",
        100000: "Lakh",
        1000000: "Million"
    };
    if (placeValue[num]) {
        console.log("Place Value:", placeValue[num]);
    } else {
        console.log("Invalid input! Enter values like 1, 10, 100, 1000, etc.");
    }
    readline.close();
});
