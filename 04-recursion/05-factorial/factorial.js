// function factorial(num) {
//   if (num < 2) return 1

//   return factorial(num - 1) * num
// }

const factorial = n => (n < 2 ? 1 : factorial(n - 1) * n)

module.exports = factorial
