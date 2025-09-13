function isPalindrome(num) {
  const reverseNum = String(num).split("").reverse().join("");
  return reverseNum === num.toString();
}

console.log(isPalindrome(1251));

function isPalindromeString(str) {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Reverse the normalized string
  const reversedStr = normalizedStr.split("").reverse().join("");
  // Compare the original and reversed strings
  return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindromeString("level")); // true
console.log(isPalindromeString("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeString("hello")); // false
