let numbers = [];
let total = 0;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; 
    numbers.push(num);
    total += num;
}
let average = total / 5;
console.log("Numbers:", numbers);
console.log("Sum:", total);
console.log("Average:", average);