function sequentialPromise(promises) {
  
}

// export { sequentialPromise };

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'foo');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'foo');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'foo');
});

sequentialPromise([promise1, promise2, promise3]).then((value) => console.log(value));

// const timeBeforeStarting = performance.now();
// await sequentialPromise(promiseFunctions);
// const timeAfterEnding = performance.now();

// console.log(timeAfterEnding - timeBeforeStarting);
