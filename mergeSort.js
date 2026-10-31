function mergeSort(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves
  const middle = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  // Merge the sorted halves
  return merge(left, right);
}

// Merge two sorted arrays
function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

// Test cases
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));