/* Problem: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. https://projecteuler.net/problem=2
*/
let fibonacciArray = [];
fibonacciArray[0] = 1;
fibonacciArray[1] = 2;
for (let i = 2; i <= 4000000; i++) {
    fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
}
const fibonacciEvenSum = () => {
    let evenSum = 0;
    for (let j = 0; j <= 4000000; j++) {
        if ((j+1) % 3 === 2) {
            evenSum += fibonacciArray[j];
        }
        else {
            evenSum = evenSum;
        }
    }
    return evenSum;
}
console.log(fibonacciEvenSum());
