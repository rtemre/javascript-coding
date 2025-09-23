// Create a task scheduler that ensures at most N tasks run concurrently, while others wait until slots are available.
// This is common in rate-limiting APIs, job queues, or download managers.

function createScheduler(limit) {
  let running = 0;
  const queue = [];

  function runNext() {
    if (running >= limit || queue.length === 0) return;

    const { task, resolve, reject } = queue.shift();
    running++;

    Promise.resolve()
      .then(task)
      .then(resolve, reject)
      .finally(() => {
        running--;
        runNext(); // start next waiting task
      });
  }

  function add(task) {
    return new Promise((resolve, reject) => {
      queue.push({ task, resolve, reject });
      runNext(); // try to run immediately if slot free
    });
  }

  return { add };
}

// Usage Example

// Create scheduler with concurrency limit = 2
const scheduler = createScheduler(2);

function createTask(id, delay) {
  return () =>
    new Promise((res) => {
      console.log(`Task ${id} started`);
      setTimeout(() => {
        console.log(`Task ${id} finished`);
        res(id);
      }, delay);
    });
}

// Add tasks
scheduler.add(createTask(1, 1000));
scheduler.add(createTask(2, 500));
scheduler.add(createTask(3, 200));
scheduler.add(createTask(4, 300));

// Output
// Task 1 started
// Task 2 started
// Task 2 finished
// Task 3 started
// Task 1 finished
// Task 4 started
// Task 3 finished
// Task 4 finished
