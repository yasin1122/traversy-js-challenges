function titleCase(str) {
  // let words = str.toLowerCase().split(' ')
  // for (let i = 0; i < words.length; i++) {
  //   words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  // }
  // words = words.join(' ')
  // return words
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

module.exports = titleCase
