function removeDuplicate(arr) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resArr.includes(arr[i])) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
}

const arr = [1, 23, 5, 36, 1, 3, 12, 36, 5, 6, 9, 3];
const arr1 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(arr));

function removeDuplicates(arr) {
  // Create a new Set from the array, which automatically removes duplicates
  const uniqueItems = new Set(arr);
  // Convert the Set back into an array
  const uniqueArray = [...uniqueItems];
  return uniqueArray;
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers); // [1, 2, 3, 4, 5]
console.log(uniqueNumbers);

function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage:
const uniqueNum = removeDuplicatesFilter(numbers); // [1, 2, 3, 4, 5]
console.log(uniqueNum);

function uniqueCharacters(str) {
  const uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars.push(str[i]);
    }
  }
  return uniqueChars.join("");
}

console.log(uniqueCharacters("geeksforgeeks")); // geksfor
