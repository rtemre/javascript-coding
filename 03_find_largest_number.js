function findLargestNumber(arr) {
  let large = 0;
  for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  return large;
}

const arr = [1, 2, 5, 3, 0, 5, 6];
console.log(findLargestNumber(arr));

function findLargeUsingMax(arr) {
  return Math.max(...arr);
}

console.log(findLargeUsingMax(arr));

function findMin(arr) {
  // Assume the first element is the minimum
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // Update min if a smaller value is found
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([5, 10, -1, 8]));

function findMinWithMath(arr) {
  return Math.min(...arr); // find minimum value
}

console.log(findMinWithMath([5, 10, -1, 8]));
