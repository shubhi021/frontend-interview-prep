const product = (num1, num2) => {
  // Expensive function.
  for (let i = 0; i < 400000; i++);
  return num1 * num2;
};

const memoProduct = (num1, num2) => {
  let cachedValue;

  if (cachedValue === undefined) {
    cachedValue = product(num1, num2);
  }
  return cachedValue;
};

const first = performance.now();
console.log(`Result: `, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - first);

const second = performance.now();
console.log(`Result:`, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - second);

/*
Result:
160952245839
Time:
1.3999999985098839
Result:
160952245839
Time:
0.30000000074505806
*/
