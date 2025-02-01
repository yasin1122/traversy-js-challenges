// function formatPhoneNumber(numArr) {
//   let strNum = '('
//   for (let i = 0; i < numArr.length; i++) {
//     if (i === 2) strNum += numArr[i] + ') '
//     else if (i === 5) strNum += numArr[i] + '-'
//     else strNum += numArr[i]
//   }
//   return strNum
// }

// const formatPhoneNumber = numArr => {
//   const areaCode = numArr.slice(0, 3).join('')
//   const prefix = numArr.slice(3, 6).join('')
//   const lineNumber = numArr.slice(6).join('')
//   return `(${areaCode}) ${prefix}-${lineNumber}`
// }

const formatPhoneNumber = numArr => {
  const strNum = numArr.join('')
  const areaCode = strNum.substring(0, 3)
  const prefix = strNum.substring(3, 6)
  const lineNumber = strNum.substring(6)
  return `(${areaCode}) ${prefix}-${lineNumber}`
}

module.exports = formatPhoneNumber
