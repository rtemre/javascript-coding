//  Implement a function to clone a deeply nested object.
function deepClone(obj, hash = new WeakMap()) {
  // Handle null, undefined, or primitive values
  if (obj === null || typeof obj !== "object") return obj;

  // Handle circular references
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy); // track reference
    obj.forEach((item, i) => {
      arrCopy[i] = deepClone(item, hash);
    });
    return arrCopy;
  }

  // Handle Object
  const clone = {};
  hash.set(obj, clone); // track reference
  Object.keys(obj).forEach((key) => {
    clone[key] = deepClone(obj[key], hash);
  });
  return clone;
}

// Eaxmple Usage
const original = {
  name: "Raman",
  meta: {
    age: 25,
    hobbies: ["coding", "reading"],
    address: { city: "Indore", pincode: 452001 },
  },
  created: new Date(),
};

const copy = deepClone(original);

copy.meta.hobbies[0] = "gaming";
copy.meta.address.city = "Bhopal";

console.log(original.meta.hobbies[0]); // "coding" (not affected)
console.log(copy.meta.hobbies[0]); // "gaming"
console.log(original.meta.address.city); // "Indore"
console.log(copy.meta.address.city); // "Bhopal"
