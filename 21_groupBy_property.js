// Write a function that groups elements of an array based on a property (or a callback function).
// This is often called groupBy.

function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    // If key is a function, call it; otherwise, access the property
    const groupKey = typeof key === "function" ? key(item) : item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, {});
}

const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 25, city: "New York" },
  { name: "David", age: 30, city: "Paris" },
];

// Group by a property
console.log(groupBy(people, "city"));
/*
{
  "New York": [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Charlie", age: 25, city: "New York" }
  ],
  "London": [
    { name: "Bob", age: 30, city: "London" }
  ],
  "Paris": [
    { name: "David", age: 30, city: "Paris" }
  ]
}
*/

// Group by computed key (age group)
console.log(groupBy(people, (p) => (p.age < 30 ? "young" : "adult")));
/*
{
  "young": [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Charlie", age: 25, city: "New York" }
  ],
  "adult": [
    { name: "Bob", age: 30, city: "London" },
    { name: "David", age: 30, city: "Paris" }
  ]
}
*/
