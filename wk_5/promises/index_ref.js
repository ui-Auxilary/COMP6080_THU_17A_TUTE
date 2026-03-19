// Synchronous
const printB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 2000);
  });
};

const printA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 1000);
  });
};

const printC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("C");
    }, 3000);
  });
};


// Asycnhronous
