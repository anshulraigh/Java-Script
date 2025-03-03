const n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
} else {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`Harmonic number H(${n}) = ${harmonic.toFixed(6)}`);
}
