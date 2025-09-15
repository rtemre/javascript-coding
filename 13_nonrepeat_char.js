function firstNonRepeatChar(str) {
  const strArr = str.split("");
  let map = new Map();
  for (let i = 0; i < strArr.length; i++) {
    if (map.has(strArr[i])) {
      map.set(strArr[i], map.get(str[i]) + 1);
    } else map.set(strArr[i], 1);
  }
  //   Map(6) { 'G' => 2, 'e' => 4, 'k' => 2, 's' => 2, 'o' => 1, 'f' => 1 }
  for (let i = 0; i <= map.size; i++) {
    if (map.get(strArr[i]) === 1) {
      return strArr[i];
    }
  }
}

console.log(firstNonRepeatChar("GeeksofGeeks")); // "o"

function fun(str) {
  const charCount = {};

  // count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(fun("GeeksForGeeks"));
