//Create a function that determines whether a number is Oddish or Evenish.
//A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.
//If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(num) {
  let singleNums = num.toString().split("").map(Number);
  let sum = singleNums.reduce((acc, curr) => acc + curr, 0);

  if (sum % 2 === 0) {
    return "Evenish";
  } else if (sum % 2 === 1) {
    return "Oddish";
  }
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
