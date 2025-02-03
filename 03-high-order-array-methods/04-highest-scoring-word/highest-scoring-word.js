// function highestScoringWord(str) {
//   const words = str.split(' ')
//   let scores = []
//   for (const word of words) {
//     let total = 0
//     for (const char of word) {
//       total += char.charCodeAt(0) - 96
//     }
//     scores.push(total)
//   }
//   let topScore = 0
//   for (const score of scores) {
//     if (score > topScore) topScore = score
//   }
//   const topScoreIndex = scores.indexOf(topScore)
//   return words[topScoreIndex]
// }

// function highestScoringWord(str) {
//   const words = str.split(' ')

//   const scores = words.map(word => {
//     let score = 0
//     for (const letter of word) {
//       score += letter.charCodeAt(0) - 96
//     }
//     return score
//   })

//   let highestScore = 0
//   let highestIndex = 0

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i]
//       highestIndex = i
//     }
//   }
//   return words[highestIndex]
// }

const highestScoringWord = str => {
  const words = str.split(' ')

  const scores = words.map(word => {
    return Array.from(word).reduce((score, letter) => {
      return score + letter.charCodeAt(0) - 96
    }, 0)
  })

  const highestScore = Math.max(...scores)
  const highestIndex = scores.indexOf(highestScore)

  return words[highestIndex]
}

module.exports = highestScoringWord
