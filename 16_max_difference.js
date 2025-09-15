// Find the maximum difference between two numbers in an array
function maximumDifference(array) {
  let maxDiff = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let diff = array[j] - array[i]; // future - past
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

const arr = [1, 2, 90, 10, 110];
console.log(maximumDifference(arr));

function maxDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - min;
    maxDiff = Math.max(maxDiff, diff);
    min = Math.min(min, arr[i]);
  }
  return maxDiff;
}

console.log(maxDifference([1, 2, 90, 10, 110]));

function maxDifferenceWithoutMath(arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - min;

    // instead of Math.max
    if (diff > maxDiff) {
      maxDiff = diff;
    }

    // instead of Math.min
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return maxDiff;
}

console.log(maxDifferenceWithoutMath([1, 2, 90, 10, 110])); // 109
