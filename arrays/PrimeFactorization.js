function primeFactors(n) {
    let factors = [];
    
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    if (n > 1) {
        factors.push(n);
    }

    console.log(`Prime Factors: ${factors}`);
}

let num = 84; // Example number
primeFactors(num);
