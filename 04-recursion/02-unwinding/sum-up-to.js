function sumUpTo(n) {
  // Base case: for 0 and 1, just return n (0 for n=0, 1 for n=1)
  // console.log(n)
  if (n <= 1) {
    return n
  }
  // Recursive case
  let recursive = sumUpTo(n - 1)
  let output = n + recursive
  // console.log('output: ', output, 'recursive: ', recursive)
  return output
}

module.exports = sumUpTo
