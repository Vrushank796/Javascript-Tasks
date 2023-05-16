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
  return (fn) => {
    if (fn in cache) {
      return cache[fn];
    } else {
      let result = sumFibs(fn);
      cache[fn] = result;
      return result;
    }
  };
}

export { sumFibs, cacheFunction };
