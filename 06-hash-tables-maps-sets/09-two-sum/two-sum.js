function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue
      else if (arr[j] + arr[i] === target) return [i, j]
    }
  }

  return []
}

module.exports = twoSum
