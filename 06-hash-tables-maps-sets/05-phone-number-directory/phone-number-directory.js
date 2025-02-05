function phoneNumberDirectory(nums) {
  const phoneMap = new Map()

  for (const num of nums) {
    const [name, number] = num.split(':')
    phoneMap.set(name, number)
  }

  return phoneMap
}

module.exports = phoneNumberDirectory
