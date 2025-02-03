// function generateHashtag(str) {
//   if (str.length < 1 || str.length > 140) return false

//   return (
//     '#' +
//     str
//       .trim()
//       .split(/\s+/) // Regex for whitespace
//       .map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1)
//       })
//       .join('')
//   )
// }

const generateHashtag = str => {
  return str.length < 1 || str.length > 140
    ? false
    : str.split(' ').reduce(function (tag, word) {
        return tag + word.charAt(0).toUpperCase() + word.substring(1)
      }, '#')
}

module.exports = generateHashtag
