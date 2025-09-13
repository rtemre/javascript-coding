function facbonacciSeries(n) {
  let num1 = 0,
    num2 = 1,
    nextNum;
  let resArr = [];
  console.log("Fibonacci Sequence:");

  for (let i = 1; i <= n; i++) {
    resArr.push(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
  return resArr;
}

console.log(facbonacciSeries(7));
