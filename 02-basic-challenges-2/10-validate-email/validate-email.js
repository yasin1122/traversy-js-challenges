// function validateEmail(str) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   return regex.test(str)
// }

const validateEmail = str => {
  // Check for any whitespace
  if (str.includes(' ')) return false

  // Find the '@' character
  const atIndex = str.indexOf('@')
  // Make sure '@' exists and isn't the very first character
  if (atIndex <= 0) return false

  // Ensure there's only one '@'
  if (str.indexOf('@', atIndex + 1) !== -1) return false

  // Split into local part (before '@') and domain part (after '@')
  const localPart = str.slice(0, atIndex)
  const domainPart = str.slice(atIndex + 1)

  // Basic checks: both parts need something
  if (!localPart || !domainPart) return false

  // Domain part should have at least one dot
  const dotIndex = domainPart.indexOf('.')
  if (dotIndex <= 0 || dotIndex === domainPart.length - 1) {
    // Either no dot found, or dot is the last character (e.g., "example.")
    return false
  }

  return true
}

module.exports = validateEmail
