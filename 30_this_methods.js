// call() Polyfill:
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Call must be called on a function");
  }

  context = context || globalThis; // fallback to global object
  const fnSymbol = Symbol(); // unique property key
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);
  delete context[fnSymbol]; // cleanup

  return result;
};

// apply() Polyfill:
Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("Apply must be called on a function");
  }

  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = Array.isArray(args)
    ? context[fnSymbol](...args)
    : context[fnSymbol]();
  delete context[fnSymbol];

  return result;
};
// Usage:
function introduce(age, city) {
  return `Hi, I'm ${this.name}, ${age} years old from ${city}.`;
}

const user = { name: "Raman" };

console.log(introduce.myCall(user, 25, "Indore"));
// "Hi, I'm Raman, 25 years old from Indore."

console.log(introduce.myApply(user, [25, "Indore"]));
// "Hi, I'm Raman, 25 years old from Indore."

// bind() polyfill
// Polyfill for Function.prototype.bind
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Bind must be called on a function");
  }

  const fn = this;

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Raman" };

const boundGreet = greet.myBind(person, "Hello");
console.log(boundGreet("!")); // "Hello, Raman!"
