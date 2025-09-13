function isPalindrome(num) {
  const reverseNum = String(num).split("").reverse().join("");
  return reverseNum === num.toString();
}

console.log(isPalindrome(1251));
