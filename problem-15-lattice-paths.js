/*Problem: How many lattice paths are there through a 20 x 20 grid where you can only move down and right?
https://projecteuler.net/problem=15 
Maths: Note that in an n x n grid, you must move exactly n down and n right. 
Any permutation of n down, n right is a valid and unique move. */

const factorialFunction = (num) => {
    if (num == 0) {
        return 1;
    }
    else {
    return num * factorialFunction(num-1);
    }
}
console.log(factorialFunction(5));

const numSquareLatticePaths = (n) => {
    return factorialFunction(2 * n)/(factorialFunction(n) * factorialFunction(n));
}
console.log(numSquareLatticePaths(20)); //Output: 137846528820
