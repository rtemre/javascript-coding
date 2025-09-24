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

var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  return nums2.filter((value) => set.delete(value));
};

const a1 = [1, 2, 2, 1],
  a2 = [2, 2];
console.log(intersection(a1, a2)); // [2]
const a3 = [4, 9, 5],
  a4 = [9, 4, 9, 8, 4];
console.log(intersection(a3, a4)); // [9,4]
