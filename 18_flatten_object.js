function flattenObject(object, parentKey = "", result = {}) {
  for (const key in object) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof object[key] === "object" &&
      object[key] !== null &&
      !Array.isArray(object[key])
    ) {
      flattenObject(object[key], newKey, result);
    } else {
      result[newKey] = object[key];
    }
  }

  return result;
}
const obj = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4 };
console.log(flattenObject(obj)); // { a: 1, 'b.c': 2, 'b.d.e': 3, f: 4 }

const nested = {
  name: "John",
  address: {
    city: "New York",
    zip: {
      code: 10001,
      area: "Manhattan",
    },
  },
  skills: ["JS", "React"],
};

console.log(flattenObject(nested));
// {
//   name: 'John',
//   'address.city': 'New York',
//   'address.zip.code': 10001,
//   'address.zip.area': 'Manhattan',
//   skills: [ 'JS', 'React' ]
// }
