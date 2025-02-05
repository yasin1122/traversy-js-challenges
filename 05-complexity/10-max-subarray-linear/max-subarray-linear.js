function maxSubarraySum(arr, k) {
  let maxSum = 0
  let currentSum = 0

  for (let i = 0; i < k; i++) {
    maxSum += arr[i]
  }

  currentSum = maxSum

  for (let i = k; i < arr.length; i++) {
    console.log(currentSum, arr[i - k], arr[i])
    currentSum = currentSum - arr[i - k] + arr[i]

    // const arr = [2, 5, 3, 1, 11, 7, 6, 4]
    console.log(`${currentSum} - ${arr[i - k]} + ${arr[i]}`)

    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

module.exports = maxSubarraySum
