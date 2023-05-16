function balancedBraces(str) {
  const para = { "}": "{", "]": "[", ")": "(" };

  let tags = [];
  for (let i in str) {
    if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
      tags.push(str[i]);
    } else if (str[i] == "}" || str[i] == "]" || str[i] == ")") {
      if (para[str[i]] == tags[tags.length - 1]) {
        tags.pop();
      }
    }
  }
  if (tags.length == 0) {
    return true;
  } else {
    return false;
  }
}

export { balancedBraces };
