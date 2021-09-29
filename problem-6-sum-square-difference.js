/* Problem: Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
https://projecteuler.net/problem=6 */

const sumOfSquares = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i**2;
  }
  return sum;
}

const squareOfSum = (m) => {
  let sumOfNumbers = 0;
  for (let j = 1; j <= m; j++) {
    sumOfNumbers += j;
  }
  return sumOfNumbers ** 2;
}
console.log(squareOfSum(100) - sumOfSquares(100)); //Output: 25164150
