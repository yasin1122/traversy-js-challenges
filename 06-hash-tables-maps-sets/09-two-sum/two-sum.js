// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (j === i) continue
//       else if (arr[j] + arr[i] === target) return [i, j]
//     }
//   }

//   return []
// }

// O(n) Solution
const twoSum = (nums, target) => {
  const numsMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    const diff = target - curr

    if (numsMap.has(diff)) return [numsMap.get(diff), i]

    numsMap.set(curr, i)
  }
  return []
}

module.exports = twoSum
