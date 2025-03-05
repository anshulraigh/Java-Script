let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet:", feet.toFixed(2), "ft");


let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);


let areaOnePlot = lengthMeters * widthMeters;
let totalArea = areaOnePlot * 25;
let areaInAcres = totalArea / 4046.86;
console.log("Total area of 25 plots in acres:", areaInAcres.toFixed(4), "acres");