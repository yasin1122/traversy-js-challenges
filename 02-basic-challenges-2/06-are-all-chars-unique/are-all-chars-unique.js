function areAllCharactersUnique(str) {
  return new Set(str).size === str.length
}

module.exports = areAllCharactersUnique
