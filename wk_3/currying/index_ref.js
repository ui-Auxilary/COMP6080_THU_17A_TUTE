const sum = (a) => (b) => (c) => {
  return a + b + c;
};

const addFive = sum(5);
const addTwoOntoFive = addFive(2);

console.log(addTwoOntoFive(3));

function currySum(f) {
  return function sumA(a) {
    return function sumB(b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let currySumFunc = currySum(sum);
console.log(currySumFunc(1)(2));

const arrowCurry = (f) => (a) => (b) => {
  console.log(f(a, b));
};

arrowCurry(sum)(1)(2);
