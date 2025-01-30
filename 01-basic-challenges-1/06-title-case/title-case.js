function titleCase(str) {
  let words = str.toLowerCase().split(' ')
  for (let word of words) {
    word[0].toUpperCase()
  }
  words.join(' ')
  return words
}

module.exports = titleCase
