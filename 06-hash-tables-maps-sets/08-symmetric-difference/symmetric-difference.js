// function symmetricDifference(arr1, arr2) {
//   const bothArrSet = new Set([...arr1, ...arr2])

//   const set1 = new Set(arr1)
//   const set2 = new Set(arr2)

//   let output = []

//   for (const el of bothArrSet) {
//     if (!set1.has(el) || !set2.has(el)) {
//       output.push(el)
//     }
//   }

//   return output
// }

const symmetricDifference = (arr1, arr2) => {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  const diff1 = [...set1].filter(el => !set2.has(el))
  const diff2 = [...set2].filter(el => !set1.has(el))

  return [...diff1, ...diff2]
}

module.exports = symmetricDifference
