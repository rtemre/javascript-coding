function characterCount(str, char) {
  let occurs = {};
  for (const ch of str) {
    occurs[ch] = (occurs[ch] || 0) + 1;
  }

  for (const key in occurs) {
    if (Object.prototype.hasOwnProperty.call(occurs, key)) {
      if (key === char) {
        return occurs[key];
      }
    }
  }
}

console.log(characterCount("hello", "l"));

function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("GeeksForGeeks", "G"));

function countCharUsingLoop(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countCharUsingLoop("GeeksForGeeks", "G"));
