function sum(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else {
    throw new TypeError('Один или несколько аргументов - не число.');
  }
}

module.exports = sum;
