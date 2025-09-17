function debounce(func, delay) {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debounceFunc = debounce((time) => {
  console.log("Call after 3sec at ", time, " time");
}, 3000);

console.log(debounceFunc(1));
console.log(debounceFunc(2));
console.log(debounceFunc(3));

// Output
// undefined
// undefined
// undefined
// Call after 3sec at  3  time
