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
