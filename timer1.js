let numbers = process.argv.slice(2);

const simpleTimer = (numbers) => {
  numbers.sort((a, b) => {
    return a - b;
  });
  numbers.map((number) => {
    setTimeout(() => {
      if (number === undefined) {
        console.log("\n");
      } else if (number < 0) {
        console.log("\n");
      } else if (isNaN(number)) {
        console.log("\n");
      } else {
        process.stdout.write(`\x07`);
      }
    }, number * 1000);
  });
};

simpleTimer(numbers);
