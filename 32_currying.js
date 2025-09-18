// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6

// 🔹 Generic Currying Implementation
// We can write a utility function to curry any function:
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24

// 🔹 Real Project Usages of Currying
// 1. Event Handlers in React / DOM
const handleChange = (field) => (event) => {
  console.log(field, event.target.value);
};

// Usage in JSX
// <input onChange={handleChange("username")} />
// <input onChange={handleChange("email")} />
// 👉 Avoids repeating boilerplate handlers for each field.

// 2. Reusability in Functions
const log = (level) => (message) => {
  console.log(`[${level}] ${message}`);
};

const info = log("INFO");
const error = log("ERROR");

info("Server started"); // [INFO] Server started
error("Something went wrong"); // [ERROR] Something went wrong
