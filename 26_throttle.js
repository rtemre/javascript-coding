function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// A function we want to throttle
function logMessage(msg) {
  console.log("Log:", msg, "at", new Date().toLocaleTimeString());
}

// Wrap it with throttle (1 second limit)
const throttledLog = throttle(logMessage, 1000);

// Simulate rapid calls (e.g., loop or incoming requests)
let count = 0;
const interval = setInterval(() => {
  throttledLog("Call #" + ++count);
  if (count === 10) clearInterval(interval);
}, 200); // Trying every 200ms

// ✅ Alternative: With setTimeout (Trailing Execution)
// function throttle(fn, delay) {
//   let throttled = false;

//   return function (...args) {
//     if (!throttled) {
//       fn.apply(this, args);
//       throttled = true;
//       setTimeout(() => throttled = false, delay);
//     }
//   };
// }
