function arraySum(arr) {
  if (arr.length === 1) return arr[0]

  return arraySum(arr.slice(1)) + arr[0]
}

module.exports = arraySum

/*

[2, 3, 4] + 1
[3, 4] + 2
[4] + 3

4 + 3 = 7
7 + 2 = 9
9 + 1 = 10

*/
