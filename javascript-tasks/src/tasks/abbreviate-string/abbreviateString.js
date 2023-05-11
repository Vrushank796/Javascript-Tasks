function abbreviateString(str) {
  let split_str = str.split(" ");

  if (split_str.length > 0) {
    return (
      split_str[0] +
      " " +
      split_str[split_str.length - 1].charAt(0).toUpperCase() +
      "."
    );
  } else {
    return split_str[0];
  }
}
export { abbreviateString };
