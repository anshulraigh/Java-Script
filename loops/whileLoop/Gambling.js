let money = 100;
let bets = 0;
let wins = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random() < 0.5 ? "lose" : "win";

    if (betResult === "win") {
        money++;
        wins++;
    } else {
        money--;
    }

    console.log(`Bet ${bets}: ${betResult} (Money left: Rs ${money})`);
}

console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 200 ? "Goal reached! You won!" : "You went broke!");
