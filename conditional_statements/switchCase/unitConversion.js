const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Choose conversion:");
console.log("1. Feet to Inches");
console.log("2. Feet to Meters");
console.log("3. Inches to Feet");
console.log("4. Meters to Feet");

readline.question("Enter choice (1-4): ", (choice) => {
    readline.question("Enter value: ", (value) => {
        value = parseFloat(value);
        switch (parseInt(choice)) {
            case 1: console.log(`${value} Feet = ${value * 12} Inches`); break;
            case 2: console.log(`${value} Feet = ${value * 0.3048} Meters`); break;
            case 3: console.log(`${value} Inches = ${value / 12} Feet`); break;
            case 4: console.log(`${value} Meters = ${value * 3.28084} Feet`); break;
            default: console.log("Invalid choice!");
        }
        readline.close();
    });
});
