/*Problem: There exists exactly one Pythagorean triplet for which a + b + c = 1000 (a^2 + b^2 = c^2, a < b < c).Find the product abc.
https://projecteuler.net/problem=9 */

//By maths: (a-1000)(b-1000) = 500000.
const factorArrayPlus1000 = (n) => {
    let factorArray = [];
    for (let i = 1; i < Math.floor(n/2); i++) {
        if (n % i === 0) {
            factorArray.push([1000-i, 1000-n/i]) //returns possible values of a,b
        }
    }
    return factorArray;
}
console.log(factorArrayPlus1000(500000)); //manually take valid values from output
console.log(Math.sqrt(200 * 200 + 375 * 375)); //finds value of c
console.log(200 * 375 * 425); //Output: 31875000
