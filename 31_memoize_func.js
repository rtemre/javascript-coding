function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache:", args);
      return cache[key];
    } else {
      console.log("Calculating result:", args);
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}
// Example function (expensive computation)
function square(n) {
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(4)); // "Calculating result: [4]" → 16
console.log(memoizedSquare(4)); // "Fetching from cache: [4]" → 16
console.log(memoizedSquare(5)); // "Calculating result: [5]" → 25
console.log(memoizedSquare(5)); // "Fetching from cache: [5]" → 25
