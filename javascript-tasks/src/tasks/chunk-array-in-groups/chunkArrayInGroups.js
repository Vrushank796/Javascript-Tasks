/* eslint-disable no-param-reassign */
function chunkArrayInGroups(array, chunkSize) {
  const chunk = [];
  for (let i = 0; i < array.length; i += chunkSize)
    chunk.push(array.slice(i, i + chunkSize));
  return chunk;
}

export { chunkArrayInGroups };
