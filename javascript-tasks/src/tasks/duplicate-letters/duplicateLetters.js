/* eslint-disable no-plusplus */
function duplicateLetters(...args) {
  let arg_str = args.toString().split("");
  var temp_arr = [...new Set(arg_str)];
  let count_arr = [];
  for (let i = 0; i < temp_arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arg_str.length; j++) {
      if (temp_arr[i] == arg_str[j]) {
        count = count + 1;
      }
    }
    count_arr.push(count);
  }
  if (Math.max(...count_arr) == 1) {
    return false;
  } else {
    return Math.max(...count_arr);
  }
}

export { duplicateLetters };
