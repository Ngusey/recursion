// Fibonacci using iteration
function fibs(n) {
  const sequence = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

// Fibonacci using recursion
function fibsRec(n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = fibsRec(n - 1);

  const nextNumber =
    sequence[sequence.length - 1] +
    sequence[sequence.length - 2];

  return [...sequence, nextNumber];
}

// Test iterative Fibonacci
console.log("Iterative Fibonacci:");
console.log(fibs(8));

// Test recursive Fibonacci
console.log("Recursive Fibonacci:");
console.log(fibsRec(8));