// 👉 Key points:
// Works only on a sorted array.
// Time complexity: O(log n)
// Space complexity: O(1)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // found, return index
    } else if (arr[mid] < target) {
      left = mid + 1; // search right half
    } else {
      right = mid - 1; // search left half
    }
  }

  return -1; // not found
}

// Example usage
const numbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(numbers, 7)); // Output: 3 (index of 7)
console.log(binarySearch(numbers, 4)); // Output: -1 (not found)
