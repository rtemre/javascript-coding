// To detect circular references in an object, you can keep track of all objects you’ve visited during traversal.
// If you encounter the same object reference again, it means there’s a cycle.

function hasCircularReference(obj) {
  const seenObjects = new WeakSet();

  function detect(value) {
    if (value && typeof value === "object") {
      if (seenObjects.has(value)) {
        return true; // Circular reference found
      }
      seenObjects.add(value);
      console.log("🚀 ~ hasCircularReference ~ seenObjects:", seenObjects);

      for (let key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          if (detect(value[key])) {
            return true;
          }
        }
      }
    }
    return false;
  }

  return detect(obj);
}

// Example usage
const a = {};
const b = { a };
a.b = b; // Circular reference - a = { b: { a: { b: { a : b { ... } } } } }
console.log(a);
console.log(b);

console.log(hasCircularReference(a)); // true

const c = { x: { y: 1 } };
console.log(hasCircularReference(c)); // false
