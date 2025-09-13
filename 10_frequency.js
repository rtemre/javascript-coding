function frequency(word) {
  let freq = {};
  for (const ele of word) {
    if (freq[ele]) {
      freq[ele] = freq[ele] + 1;
    } else {
      freq[ele] = 1;
    }
  }
  return freq;
}

console.log(frequency("hello"));
console.log(frequency("helloworld"));
console.log(frequency("heythere"));
