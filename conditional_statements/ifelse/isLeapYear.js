function isLeapYear(year) {
    year = parseInt(year);
    if (year >= 1000 && year <= 9999) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log(year + " is a Leap Year");
        } else {
            console.log(year + " is NOT a Leap Year");
        }
    } else {
        console.log("Please enter a 4-digit year.");
    }
}

const args = process.argv.slice(2);
isLeapYear(args[0]);
