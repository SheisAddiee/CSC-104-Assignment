
let work = alert("Let's calculate Simple Interest")
console.log(work)

let principal = prompt("Enter the principal amount:", 1200);
let rate = prompt("Enter the rate:", 20);
let time = prompt("Enter the time:", 2);
let simpleInterest = (principal * rate * time) / 100;
alert(`The simple interest is: ₦${simpleInterest.toFixed(2)}`);
