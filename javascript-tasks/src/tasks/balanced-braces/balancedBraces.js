function balancedBraces(str) {
  //para object -> To compare with opening tag in tags array when closing tag encounters
  const para = { "}": "{", "]": "[", ")": "(" };

  let tags = []; // To store opening tag

  //loop through characters of string
  for (let i in str) {
    if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
      tags.push(str[i]); // Push opening tag in array
    } else if (str[i] == "}" || str[i] == "]" || str[i] == ")") {
      if (para[str[i]] == tags[tags.length - 1]) {
        //Compare last opening tag in tags array, if it is the same one remove it.
        tags.pop();
      }
    }
  }

  //Check if tags array is empty, we would have balanced braces, paranthesis, and brackets
  if (tags.length == 0) {
    return true;
  } else {
    return false;
  }
}

export { balancedBraces };
