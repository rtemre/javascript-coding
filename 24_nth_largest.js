// ✅ Approach 1: Sort & Pick (Easy, O(n log n))
function nthLargest(arr, n) {
  if (n > arr.length) return null; // edge case

  // Sort in descending order
  const sorted = [...arr].sort((a, b) => b - a);

  return sorted[n - 1]; // nth largest
}

// Example
console.log(nthLargest([4, 1, 7, 3, 9, 2], 1)); // 9 (largest)
console.log(nthLargest([4, 1, 7, 3, 9, 2], 3)); // 4 (3rd largest)

// ✅ Approach 2: Using Min-Heap / Quickselect (Efficient for large arrays, O(n))

function nthLargestSecondMethod(arr, n) {
  function partition(left, right) {
    let pivot = arr[right];
    let pIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] > pivot) {
        // Descending order
        [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
        pIndex++;
      }
    }
    [arr[pIndex], arr[right]] = [arr[right], arr[pIndex]];
    return pIndex;
  }

  function quickSelect(left, right, index) {
    if (left <= right) {
      const pivotIndex = partition(left, right);
      if (pivotIndex === index) return arr[pivotIndex];
      if (pivotIndex < index) return quickSelect(pivotIndex + 1, right, index);
      return quickSelect(left, pivotIndex - 1, index);
    }
  }

  return quickSelect(0, arr.length - 1, n - 1);
}

// Example
console.log(nthLargestSecondMethod([4, 1, 7, 3, 9, 2], 2)); // 7 (2nd largest)
