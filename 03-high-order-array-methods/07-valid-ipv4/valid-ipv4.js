const isValidIPv4 = str => {
  const octets = str.split('.')

  if (octets.length !== 4) return false

  return octets.every(octet => {
    const num = parseInt(octet)
    return num >= 0 && num <= 255 && octet === num.toString()
  })
}

module.exports = isValidIPv4
