function factorial(num) {
  let result = 1;
  if (num <= 0) return "Invalid Number";
  if (num === 1 || num === 2) return num;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }

  return result;
}
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));

// console.log(factorial(3));
console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(11));

function factRecursively(params) {
  if (params < 1) return 1;
  return params * factRecursively(params - 1);
}

console.log(factRecursively(5));
