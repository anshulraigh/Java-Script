function findSecondLargestAndSmallest() {
    let numbers = [];
    
    // Generate and store 10 random 3-digit numbers
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(100 + Math.random() * 900));
    }

    console.log("Generated Numbers:", numbers);

    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;

    for (let num of numbers) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }

    console.log("Second Largest:", secondMax);
    console.log("Second Smallest:", secondMin);
}

findSecondLargestAndSmallest();
