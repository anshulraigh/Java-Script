const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a non-negative integer.");
} else {
    let i = 0;
    let power = 1;

    console.log(`Powers of 2 up to 2^${n} (max 256):`);
    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
        i++;
    }
}
