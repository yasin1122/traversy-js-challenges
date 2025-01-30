function findMissingNumber(nums) {
  if (!nums) return undefined
  else if (nums.length === 0) return 1
  else {
    // let total = 1
    // let missingTotal = 0
    // for (let i = 1; i <= nums.length; i++) {
    //   total += i + 1
    //   missingTotal += nums[i - 1]
    // }
    // console.log(total, missingTotal)

    let total = ((nums.length + 1) * (nums.length + 2)) / 2
    let missingTotal = nums.reduce((sum, num) => sum + num, 0)

    return total - missingTotal
  }
}

module.exports = findMissingNumber
