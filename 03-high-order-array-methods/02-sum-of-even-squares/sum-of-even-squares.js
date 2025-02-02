function sumOfEvenSquares(nums) {
  let evenNums = nums.filter(num => num % 2 === 0)
  let squaredEvens = evenNums.map(num => num * num)
  // The optional 0 resolves the issue with an empty nums[]
  let total = squaredEvens.reduce((sum, num) => sum + num, 0)
  return total
}

module.exports = sumOfEvenSquares
