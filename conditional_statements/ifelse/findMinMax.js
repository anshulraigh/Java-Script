function findMinMax() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(100 + Math.random() * 900)); 
    }
    console.log("Generated Numbers:", numbers);
    console.log("Minimum:", Math.min(...numbers));
    console.log("Maximum:", Math.max(...numbers));
}

findMinMax();
