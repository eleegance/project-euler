/* Problem: Find the 10001st prime number.
https://projecteuler.net/problem=7 */
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
const primeListFunction = (n) => {
  var primeList = [];
  for (let i = 2; i < 1000000; i++) {
    if (primeCheckerFunction(i) == true) {
      primeList.push(i);
    }
  }
  return primeList[n-1];
}
console.log(primeListFunction(10001)); //Output: 104743
