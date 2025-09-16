// Swap two variables without using a temporary variable.
function swapWithoutTemp([a, b]) {
  // 1. Using Arithmetic (Addition & Subtraction)
  a = a + b; // a = 15
  b = a - b; // b = 5
  a = a - b; // a = 10

  // 2. Using Arithmetic (Multiplication & Division)
  //   a = a * b; // a = 50
  //   b = a / b; // b = 5
  //   a = a / b; // a = 10

  // 3. Using Bitwise XOR
  //   a = a ^ b;
  //   b = a ^ b;
  //   a = a ^ b;

  // 4. Using Array Destructuring (Modern JavaScript)
  //   [a, b] = [b, a];

  return [a, b];
}

console.log(swapWithoutTemp([5, 10]));
