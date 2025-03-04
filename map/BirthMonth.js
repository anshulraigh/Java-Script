function generateBirthMonths() {
    let birthMonths = new Map();

    for (let i = 1; i <= 12; i++) {
        birthMonths.set(i, []);
    }


    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonths.get(month).push(`Person${i}`);
    }

    console.log("Birth Months Mapping:", Object.fromEntries(birthMonths));

    for (let [month, people] of birthMonths.entries()) {
        console.log(`Month ${month}:`, people.length > 0 ? people : "No Birthdays");
    }
}

generateBirthMonths();
