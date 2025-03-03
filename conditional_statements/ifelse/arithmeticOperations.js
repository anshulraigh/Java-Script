const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter three numbers (a b c): ", (input) => {
    let [a, b, c] = input.split(" ").map(Number);

    let op1 = a + b * c;
    let op2 = a % b + c;
    let op3 = c + a / b;
    let op4 = a * b + c;

    let results = [op1, op2, op3, op4];

    console.log(`Results: 
    1. a + b * c = ${op1}
    2. a % b + c = ${op2}
    3. c + a / b = ${op3}
    4. a * b + c = ${op4}`);

    console.log("Maximum Value:", Math.max(...results));
    console.log("Minimum Value:", Math.min(...results));

    readline.close();
});
