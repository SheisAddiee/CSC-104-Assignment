let ci = alert("Let's calculate Compound Interest")
console.log(ci)

let cprincipal = prompt("Enter the principal amount:", 1200);
let crate = prompt("Enter the rate:", 20);
let ntime = prompt("Enter the time:", 2);
let compoundInterest = cprincipal *(Math.pow((1 + crate / 100), ntime));
alert(`The compound interest is: ₦${compoundInterest.toFixed(2)}`);
