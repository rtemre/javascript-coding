// Promise Combinators (Helpers)

// Promise.all([p1, p2, ...]) → Waits for all promises, rejects if any fail.
// Promise.allSettled([p1, p2, ...]) → Waits for all, always resolves with statuses.
// Promise.race([p1, p2, ...]) → Settles as soon as first promise settles.
// Promise.any([p1, p2, ...]) → Resolves as soon as first success, rejects if all fail.

// Write a polyfill for Promise.all.
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    let results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });

    // Edge case: empty array
    if (promises.length === 0) {
      resolve([]);
    }
  });
};

// Write a polyfill for Promise.allSettled.
Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Argument must be an array");
    }

    let results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });

    if (promises.length === 0) {
      resolve([]);
    }
  });
};

// Write a polyfill for Promise.race.
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    promises.forEach((p) => {
      Promise.resolve(p).then(resolve).catch(reject);
    });

    // Edge case: empty array -> stays pending forever (same as native)
  });
};

// Usage Example:
let p1 = Promise.resolve(10);
let p2 = new Promise((res) => setTimeout(res, 100, 20));
let p3 = Promise.reject("fail");

// Test Promise.all
Promise.myAll([p1, p2]).then(console.log).catch(console.error);

// Test Promise.allSettled
Promise.myAllSettled([p1, p3]).then(console.log);

// Test Promise.race
Promise.myRace([p2, p1]).then(console.log).catch(console.error);
