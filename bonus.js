var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};

const counter1 = createCounter(5);
console.log(counter1.increment()); // Output: 6
console.log(counter1.reset());     // Output: 5
console.log(counter1.decrement()); // Output: 4

const counter2 = createCounter(0);
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.decrement()); // Output: 1
console.log(counter2.reset());     // Output: 0
console.log(counter2.reset());     // Output: 0
