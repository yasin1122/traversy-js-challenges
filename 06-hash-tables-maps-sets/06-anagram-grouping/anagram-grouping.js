function anagramGrouping(words) {
  const anagramMap = new Map()

  for (const word of words) {
    const sortedChars = word.split('').sort().join('')

    if (anagramMap.has(sortedChars)) {
      anagramMap.get(sortedChars).push(word)
    } else {
      anagramMap.set(sortedChars, [word])
    }
  }

  return Array.from(anagramMap.values())
}

module.exports = anagramGrouping
