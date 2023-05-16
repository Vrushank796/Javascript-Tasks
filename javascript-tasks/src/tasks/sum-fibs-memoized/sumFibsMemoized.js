function sumFibs(num) {
  let prevFib = 0;
  let currFib = 1;
  let nextFib = 0;
  let sum = 0;
  while (currFib < num) {
    if (currFib % 2 !== 0) {
      sum += currFib;
    }
    nextFib = prevFib + currFib;
    prevFib = currFib;
    currFib = nextFib;
  }

  return sum;
}

//memoized function-> save previous result using closure and lexical scoping
function cacheFunction(fn) {
  const cache = {};
  return (val) => {
    if (val in cache) {
      return cache[val];
    } else {
      let result = fn(val);
      cache[val] = result;
      return result;
    }
  };
}

export { sumFibs, cacheFunction };
