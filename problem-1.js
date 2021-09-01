const sumOfMultiples = (num) => {
  let sumOf = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumOf = sumOf + i
    }
  }
  return sumOf;
}
console.log(sumOfMultiples(1000));
