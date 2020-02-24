// https://stackoverflow.com/a/15471749/3330490
// Eratosthenes algorithm to find all primes under n

export const eratosthenes = n => {
  if (n < 1 || !Number(n)) {
    throw new Error('Must supply a Number that is greater than 1');
  }

  const array = [];
  const output = [];
  const upperLimit = Math.sqrt(n);

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};
