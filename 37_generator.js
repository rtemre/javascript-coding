// Implement async/await behavior using generators
function asyncFromGenerator(generatorFn) {
  return function (...args) {
    const gen = generatorFn(...args);

    return new Promise((resolve, reject) => {
      function step(nextFn, arg) {
        let result;
        try {
          result = nextFn.call(gen, arg); // gen.next() or gen.throw()
        } catch (error) {
          return reject(error); // if generator throws synchronously
        }

        const { value, done } = result;
        if (done) {
          return resolve(value); // generator finished
        }

        // value should be a Promise (like await)
        Promise.resolve(value).then(
          (val) => step(gen.next, val),
          (err) => step(gen.throw, err)
        );
      }

      step(gen.next); // start
    });
  };
}

// Example Usage

// simulate async task
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// define generator as async function
const fetchData = asyncFromGenerator(function* () {
  const user = yield delay(1000, { id: 1, name: "Raman" });
  console.log("User:", user);

  const posts = yield delay(1000, ["post1", "post2"]);
  console.log("Posts:", posts);

  return { user, posts };
});

// call it like async/await
fetchData().then((result) => console.log("Final result:", result));

// Output
// User: { id: 1, name: 'Raman' }
// Posts: [ 'post1', 'post2' ]
// Final result: { user: { id: 1, name: 'Raman' }, posts: [ 'post1', 'post2' ] }
