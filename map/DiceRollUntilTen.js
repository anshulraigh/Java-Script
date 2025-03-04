function rollDieSimulation() {
    let dieRolls = new Map();

    for (let i = 1; i <= 6; i++) {
        dieRolls.set(i, 0);
    }

    let maxRoll = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dieRolls.set(roll, dieRolls.get(roll) + 1);

        if (dieRolls.get(roll) === maxRoll) {
            reachedMax = true;
        }
    }

    console.log("Die Roll Counts:", Object.fromEntries(dieRolls));

  
    let maxNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    let minNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

    console.log("Number that appeared maximum times:", maxNumber);
    console.log("Number that appeared minimum times:", minNumber);
}

rollDieSimulation();
