// Shuffle an Array Randomly using Fisher–Yates Shuffle Algorithm (also called Knuth Shuffle).

function shuffleArray(arr) {
  let result = [...arr]; // copy to avoid mutating original
  for (let i = result.length - 1; i > 0; i--) {
    let randomValue = Math.random() * (i + 1); // Math.random()-> 0.5816987298765117 * 5 = 3.5779640367596013
    let j = Math.floor(randomValue);

    [result[i], result[j]] = [result[j], result[i]]; // swap
  }
  return result;
}

// Example
console.log(shuffleArray([1, 2, 3, 4, 5])); //[ 2, 3, 5, 1, 4 ]
