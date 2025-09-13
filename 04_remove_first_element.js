function removeFirstElement(arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

const arr = [1, 2, 56, 56, 345, 68, 52];

console.log(removeFirstElement(arr));

function removeUsingMethod(arr) {
  return arr.slice(1);
}

console.log(removeUsingMethod(arr));

const myArray = [10, 20, 30, 40];
myArray.shift(); // Removes the first element (10)
console.log(myArray); // Output: [20, 30, 40]
