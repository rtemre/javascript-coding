/**
 * Retry an operation until success or max retries reached
 * @param {Function} operation - Function that may fail (can be sync or async)
 * @param {number} maxRetries - Maximum attempts
 * @param {number} delay - Delay between retries in ms
 * @returns {Promise<any>} - Resolves with operation result or rejects after max retries
 */
async function retry(operation, maxRetries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt} failed: ${err.message}`);
      if (attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  }

  throw new Error(
    `All ${maxRetries} retries failed. Last error: ${lastError.message}`
  );
}

// Example: random API call simulation
async function unstableOperation() {
  if (Math.random() < 0.7) {
    throw new Error("Random failure");
  }
  return "Success!";
}

retry(unstableOperation, 5, 500)
  .then((result) => console.log("Final result:", result))
  .catch((err) => console.error("Failed after retries:", err.message));
