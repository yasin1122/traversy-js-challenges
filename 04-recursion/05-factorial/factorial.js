function factorial(num) {
  if (num < 2) return 1

  return factorial(num - 1) * num
}

module.exports = factorial
