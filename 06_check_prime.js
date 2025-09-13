function checkPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    // loops runs till num = 11 so it run 10 times
    // console.log("loop", i);
    if (num % i === 0) return false;
  }
  return true;
}

console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(8));
console.log(checkPrime(11));

function checkPrimeEfficient(num) {
  if (num <= 1) return false;
  //   console.log(Math.sqrt(num));
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Math.sqrt(num) = 3.3 so loop runs only 2 times
    // console.log("loop Squa", i);

    if (num % i === 0) return false;
  }
  return true;
}

console.log(checkPrimeEfficient(11));

function checkPrimeMoreEfficient(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
