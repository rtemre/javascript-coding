function intersection(arr1 = [], arr2 = []) {
  return arr1.filter((a1) => arr2.includes(a1));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 2, 7, 4, 5];

console.log(intersection(arr1, arr2));

function intersectionWithoutMethod(arr1, arr2) {
  let result = [];
  for (let i = 0; i <= arr1.length; i++) {
    if (arr2.includes(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(intersectionWithoutMethod(arr1, arr2));
