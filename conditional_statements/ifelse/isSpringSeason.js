function isSpringSeason(day, month) {
    month = parseInt(month);
    day = parseInt(day);

    if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
const args = process.argv.slice(2);
isSpringSeason(args[0], args[1]);
