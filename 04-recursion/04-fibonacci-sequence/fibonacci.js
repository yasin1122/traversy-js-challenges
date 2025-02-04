// function fibonacci(index) {
//   if (index < 2) return index

//   return fibonacci(index - 1) + fibonacci(index - 2)
// }

const fibonacci = index =>
  index < 2 ? index : fibonacci(index - 1) + fibonacci(index - 2)

module.exports = fibonacci
