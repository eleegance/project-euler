/*Problem: What is the largest prime factor of 600851475143?
https://projecteuler.net/problem=3 */
const primeCheckerFunction = (n) => {
  if (n === 1) {
    return "undefined";
  }
  else if (n === 2) {
    return true;
  }
  else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          return false;
        }
    }
    return true;
  }
};

const maxPrimeFactoriser = (n) => {
  var factorisationArray = [];
  for (let i = 193387; i >= 2; i -= 2) {
    if (n % i === 0 && primeCheckerFunction(i) == true) {
      factorisationArray.push(i);
      break;
    }
  }
  return factorisationArray;
}
console.log(maxPrimeFactoriser(600851475143))
//Output: 6857
