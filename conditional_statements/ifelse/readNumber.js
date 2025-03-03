const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a single-digit number: ", (num) => {
    const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    if (num >= 0 && num <= 9) {
        console.log("Number in words:", numberWords[num]);
    } else {
        console.log("Invalid input! Please enter a single-digit number (0-9).");
    }
    readline.close();
});
