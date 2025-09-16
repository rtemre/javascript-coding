function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (const s of str) {
    if (vowels.includes(s)) count += 1;
  }
  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("hello World"));
console.log(countVowels("hello Developer"));
