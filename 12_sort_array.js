// Incorrect solution
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
const arr = [2, 1, 5, 3, 4];
console.log(sortArray(arr));
console.log(sortArray([5, 3, 8, 1]));

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // n-1 passes
    for (let j = 0; j < n - i - 1; j++) {
      // compare up to last unsorted
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 1])); // [1, 3, 5, 8]

console.log([5, 3, 8, 1].sort((a, b) => a - b));

function sortArrayDesc(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));
