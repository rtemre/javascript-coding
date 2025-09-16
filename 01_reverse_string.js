function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));

// Reverse a string in JavaScript without using built-in `reverse()`.

function reverseStringWithoutMethod(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseStringWithoutMethod("Hello"));
