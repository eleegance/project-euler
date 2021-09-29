/* Problem: Find the sum of all the primes under two million.
https://projecteuler.net/problem=10 */

const primeCheckerFunction = (n) => {
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    return false;
    }
}
  return true;
};

const primeAdderFunction = (n) => {
  var primeSum = 2;
  for (let i = 3; i < n; i = i+2) {
    if (primeCheckerFunction(i) == true) {
      primeSum += i;
    }
    else {
      primeSum += 0;
    }
  }
  return primeSum;
}
console.log(primeAdderFunction(2000000)); //Output: 142913828922
