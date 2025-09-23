// Write a function that converts callback-style APIs into Promise-based ones.
// Writing a polyfill for util.promisify (Node.js provides this, but we can build our own).
// A callback-style API typically looks like this:

function someAsync(arg1, arg2, callback) {
  // callback(error, result)
}

// We want to convert it into a promise-based version:
const promisified = promisify(someAsync);

promisified(arg1, arg2)
  .then((result) => {})
  .catch((err) => {});

// Here’s a generic implementation:
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };
}

// Example Usage
// Example callback-style function
function readFileMock(path, callback) {
  setTimeout(() => {
    if (path === "bad.txt") {
      return callback(new Error("File not found"));
    }
    callback(null, "File contents of " + path);
  }, 100);
}

// Convert to promise version
const readFileAsync = promisify(readFileMock);

readFileAsync("test.txt")
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Error:", err.message));
