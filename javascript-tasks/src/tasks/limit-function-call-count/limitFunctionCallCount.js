function limitFunctionCallCount(fn, count) {
  let countFnInvoked = 0;
  return (...args) => {
    if (countFnInvoked < count) {
      countFnInvoked += 1;
      return fn(...args);
    } else {
      return null;
    }
  };
}
export { limitFunctionCallCount };
