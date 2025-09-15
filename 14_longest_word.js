function longestWord(str) {
  const arr = str.split(" ");
  let long = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > long) {
      long = arr[i].length;
    }
  }
  return long;
}

console.log(longestWord("hello world"));
console.log(longestWord("hey there"));
console.log(longestWord("javascript coding"));

function longestWordString(str) {
  //str is split into an array of words using the split method.
  const words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWordString("GeeksForGeeks is great"));
