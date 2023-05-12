function sumFibs(num) {
  if (typeof num === "number") {
    let temp = [1, 1];
    let sum = 0;

    //create array with fibonnaci numbers less than num
    for (let i = 2; i < num; i++) {
      let tempSum = temp[i - 1] + temp[i - 2];
      if (tempSum < num) {
        temp.push(tempSum);
      } else {
        break;
      }
    }

    //calculate fibonnaci sum of odd fibonnaci numbers less than 10
    temp.map((x) => {
      if (x % 2 != 0) {
        sum = sum + x;
      }
    });
    return sum;
  } else {
    return num;
  }
}

//memoized function-> save previous result using closure and lexical scoping
function cacheFunction(fn) {
  var sum = 0;
  var boolean = false;
  return function (fn) {
    if (typeof fn !== "number") {
      //for boolean argument
      if (boolean == false) {
        boolean = sumFibs(fn);
        console.log("first" + boolean);
        return sum;
      } else {
        console.log("second" + boolean);
        return sum;
      }
    } else {
      //for number argument
      if (sum == 0) {
        sum = sumFibs(fn);
        console.log("first" + sum);
        return sum;
      } else {
        console.log("second" + sum);
        return sum;
      }
    }
  };
}

export { sumFibs, cacheFunction };
