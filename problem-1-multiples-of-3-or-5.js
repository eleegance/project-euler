/* Problem: Find the sum of all the multiples of 3 or 5 below 1000.
https://projecteuler.net/problem=1 */
const sumOfMultiples = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i
    }
  }
  return sum;
}
console.log(sumOfMultiples(1000));
