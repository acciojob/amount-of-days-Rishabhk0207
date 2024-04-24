//your JS code here. If required.
function daysOfAYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366; 
  } else {
    return 365; 
  }
}

console.log(2022);
console.log(2024);
console.log(1900);
console.log(2000);
