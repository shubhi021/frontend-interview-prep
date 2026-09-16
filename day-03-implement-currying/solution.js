let sum = function (a) {
  let total = a;
  return function inner(b) {
    if (b === undefined) {
      return total;
    }
    total += b;
    return inner;
  };
};

console.log(sum(1)(2)(5)());
