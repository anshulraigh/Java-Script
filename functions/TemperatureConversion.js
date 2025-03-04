const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function toFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

function toCelsius(degF) {
    return (degF - 32) * 5/9;
}

readline.question("Choose conversion: \n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter choice: ", (choice) => {
    if (choice === "1") {
        readline.question("Enter temperature in Celsius (0-100): ", (degC) => {
            degC = parseFloat(degC);
            if (degC >= 0 && degC <= 100) {
                console.log(`${degC}°C = ${toFahrenheit(degC).toFixed(2)}°F`);
            } else {
                console.log("Temperature out of range!");
            }
            readline.close();
        });
    } else if (choice === "2") {
        readline.question("Enter temperature in Fahrenheit (32-212): ", (degF) => {
            degF = parseFloat(degF);
            if (degF >= 32 && degF <= 212) {
                console.log(`${degF}°F = ${toCelsius(degF).toFixed(2)}°C`);
            } else {
                console.log("Temperature out of range!");
            }
            readline.close();
        });
    } else {
        console.log("Invalid choice!");
        readline.close();
    }
});
