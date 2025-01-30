function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  for (let i = 0, j = formattedStr.length - 1; i < j; i++, j--) {
    console.log(formattedStr[i], formattedStr[j])
    if (formattedStr[i] !== formattedStr[j]) return false
  }
  return true
}

module.exports = isPalindrome
