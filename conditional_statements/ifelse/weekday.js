const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number (1-7): ", (num) => {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (num >= 1 && num <= 7) {
        console.log("Day of the week:", weekDays[num - 1]);
    } else {
        console.log("Invalid input! Please enter a number between 1 and 7.");
    }
    readline.close();
});
