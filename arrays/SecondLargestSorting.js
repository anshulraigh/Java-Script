function findSecondLargestAndSmallestSorted() {
    let numbers = [];
    
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(100 + Math.random() * 900));
    }

    console.log("Generated Numbers:", numbers);

    // Sort the array
    numbers.sort((a, b) => a - b);
    console.log("Sorted Numbers:", numbers);

    console.log("Second Smallest:", numbers[1]);
    console.log("Second Largest:", numbers[numbers.length - 2]);
}

findSecondLargestAndSmallestSorted();
